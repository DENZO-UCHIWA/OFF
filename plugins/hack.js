const { smd, sleep } = require('../lib');

smd({ cmdname: "hack", type: "fun", info: "hacking prank", filename: __filename }, async (citel) => {
  const messages = [
   
            '💻 HACK STARTING... Injecting Malware 💻',
            '',
            'Initializing hacking tools... 🛠',
            'Connecting to remote servers... 🌐',
            '',
            '[▰▰▰▱▱▱▱▱▱▱] 10% ⏳'                                            ,
            '[▰▰▰▰▱▱▱▱▱▱] 20% ⏳'                                   ,
            '[▰▰▰▰▰▱▱▱▱▱] 30% ⏳'                               ,
            '[▰▰▰▰▰▰▱▱▱▱] 40% ⏳'                            ,
            '[▰▰▰▰▰▰▰▱▱▱] 50% ⏳'                       ,
            '[▰▰▰▰▰▰▰▰▱▱] 60% ⏳'                 ,
            '[▰▰▰▰▰▰▰▰▰▱] 70% ⏳'            ,
            '[▰▰▰▰▰▰▰▰▰▰] 80% ⏳'        ,
            '[▱▱▱▱▱▱▱▰▰▰▰] 90% ⏳'    ,
            '[▱▱▱▱▱▱▱▱▱▱▱▱▱▱] 100% ✅',
            '',
            '🔒 System Breach: Successful! 🔓',
            '🚀 Command Execution: Complete! 🎯',
            '',
            '📡 Transmitting data... 📤',
            '🕵‍♂ Ensuring stealth... 🤫',
            '🔧 Finalizing operations... 🏁',
            '',
            '⚠ Note: All actions are for demonstration purposes only.',
            '⚠ Reminder: Ethical hacking is the only way to ensure security.',
            '',
            '> _BY BLAST-MD☣_'
  ];

  let editedMessage;
  for (const message of messages) {
    editedMessage = await citel.send(editedMessage || message);
    await sleep(1000);
    editedMessage = await citel.edit(editedMessage, message);
  }
});
