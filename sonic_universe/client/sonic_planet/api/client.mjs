import {
  Connection,
  PublicKey,
  Transaction,
  TransactionInstruction,
} from "@solana/web3.js";
import { getKeypairFromFile } from "@solana-developers/helpers";

// AA7rFn83Cc6dzgRP2fPsrRb9gy7v6hkS4oZSnjwYnBQ - First one
// D2JpLs5Q35QKSsr2QyfMreFyrneXQm4nWvjzUvSTXzwq - Devnet kEY
// D2JpLs5Q35QKSsr2QyfMreFyrneXQm4nWvjzUvSTXzwq -Sonic dev net
const programId = new PublicKey("D2JpLs5Q35QKSsr2QyfMreFyrneXQm4nWvjzUvSTXzwq");

// Connect to a Solana cluster. Either to your local test validator or to devnet
// const connection = new Connection("http://localhost:8899", "confirmed");
// const connection = new Connection("https://api.devnet.solana.com", "confirmed");
const connection = new Connection('https://devnet.sonic.game', 'confirmed');

// Load the keypair that we created in a previous step
const keyPair = await getKeypairFromFile("~/.config/solana/id.json");

// Every transaction requires a blockhash
const blockhashInfo = await connection.getLatestBlockhash();

// Create a new transaction
const tx = new Transaction({
  ...blockhashInfo,
});

// Add our Hello World instruction
tx.add(
  new TransactionInstruction({
      programId: programId,
      keys: [],
      data: Buffer.from([]),
  })
);

// Sign the transaction with your previously created keypair
tx.sign(keyPair);

// Send the transaction to the Solana network
const txHash = await connection.sendRawTransaction(tx.serialize());

console.log("Transaction sent with hash:", txHash);

// Confirm the transaction
await connection.confirmTransaction({
  blockhash: blockhashInfo.blockhash,
  lastValidBlockHeight: blockhashInfo.lastValidBlockHeight,
  signature: txHash,
});

// Fetch transaction details and logs using getTransaction
const transactionDetails = await connection.getTransaction(txHash, { commitment: "confirmed" });

// Extract logs
// Assuming the previous imports and connection setup is already done

// After fetching transaction details and logs
const logs = transactionDetails.meta.logMessages;
console.log("Transaction logs:", logs);

// Extract riddles between ****start and ****end
const riddleLogs = [];
let isRiddleSection = false;

for (const log of logs) {
    if (log.includes("****start")) {
        isRiddleSection = true; // Start collecting riddles
        continue; // Skip the start marker
    }

    if (log.includes("****end")) {
        isRiddleSection = false; // Stop collecting riddles
        continue; // Skip the end marker
    }

    if (isRiddleSection && log.includes("riddle:")) {
        // Extract riddle and answer using regex
        const riddleMatch = log.match(/riddle: "(.*?)", answer: "(.*?)"/);
        if (riddleMatch) {
            riddleLogs.push({
                riddle: riddleMatch[1],
                answer: riddleMatch[2],
            });
        }
    }
}

// Convert to JSON format
const riddleJson = JSON.stringify(riddleLogs, null, 2);

console.log("Riddles in JSON format:", riddleJson);


/* 
import {
  Connection,
  PublicKey,
  Transaction,
  TransactionInstruction,
} from "@solana/web3.js";
import { getKeypairFromFile } from "@solana-developers/helpers";

// AA7rFn83Cc6dzgRP2fPsrRb9gy7v6hkS4oZSnjwYnBQ
const programId = new PublicKey("D2JpLs5Q35QKSsr2QyfMreFyrneXQm4nWvjzUvSTXzwq");

// Connect to a Solana cluster. Either to your local test validator or to devnet
const connection = new Connection("http://localhost:8899", "confirmed");
// const connection = new Connection("https://api.devnet.solana.com", "confirmed");

// Load the keypair that we created in a previous step
const keyPair = await getKeypairFromFile("~/.config/solana/id.json");

// Every transaction requires a blockhash
const blockhashInfo = await connection.getLatestBlockhash();

// Create a new transaction
const tx = new Transaction({
  ...blockhashInfo,
});

// Add our Hello World instruction
tx.add(
  new TransactionInstruction({
      programId: programId,
      keys: [],
      data: Buffer.from([]),
  })
);

// Sign the transaction with your previously created keypair
tx.sign(keyPair);

// Send the transaction to the Solana network
const txHash = await connection.sendRawTransaction(tx.serialize());

console.log("Transaction sent with hash:", txHash);

// Confirm the transaction
await connection.confirmTransaction({
  blockhash: blockhashInfo.blockhash,
  lastValidBlockHeight: blockhashInfo.lastValidBlockHeight,
  signature: txHash,
});

// Fetch transaction details and logs using getTransaction
const transactionDetails = await connection.getTransaction(txHash, { commitment: "confirmed" });

// Extract logs
const logs = transactionDetails.meta.logMessages;
console.log("Transaction logs:", logs);

// Example: Convert logs to a JSON structure (Uncomment when needed)
const riddles = logs
.filter(log => log.includes("Riddle"))
.map(log => {
  const [riddlePart, answerPart] = log.split(", answer: ");
  const riddle = riddlePart.replace("Riddle: ", "").trim();
  const answer = answerPart.replace("**", "").trim();
  return { riddle, answer };
});

console.log("Riddles in JSON format:", JSON.stringify(riddles, null, 2));
 */