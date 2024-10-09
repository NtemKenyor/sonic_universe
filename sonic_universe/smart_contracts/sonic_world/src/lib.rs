use solana_program::{
    account_info::AccountInfo,
    entrypoint,
    entrypoint::ProgramResult,
    pubkey::Pubkey,
    msg,
};

// declare and export the program's entrypoint
entrypoint!(process_instruction);

// program entrypoint's implementation
pub fn process_instruction(
    _program_id: &Pubkey,
    _accounts: &[AccountInfo],
    _instruction_data: &[u8]
) -> ProgramResult {
    // log riddles to the blockchain in the desired format
    msg!("****start");
    msg!("**riddle: \"What has keys but can't open locks?\", answer: \"Keyboard\" **");
    msg!("**riddle: \"What comes down but never goes up?\", answer: \"Rain\" **");
    msg!("**riddle: \"What has a heart that doesn’t beat?\", answer: \"Artichoke\" **");
    msg!("**riddle: \"I speak without a mouth and hear without ears. What am I?\", answer: \"Echo\" **");
    msg!("**riddle: \"What can fill a room but takes up no space?\", answer: \"Light\" **");
    msg!("****end");
    
    // gracefully exit the program
    Ok(())
}
