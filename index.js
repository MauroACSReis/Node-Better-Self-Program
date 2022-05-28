const questions = [
  'What you learned today?',
  'What can you do to make it better?'
]
const ask = (index = 0) => {
  process.stdout.write('\n\n' + questions[index] + ' > ')
}

ask()

const answers = []
process.stdin.on('data', data => {
  answers.push(data.toString().trim())
  if (answers.lenght < questions.lenght) {
    ask(answers.lenght)
  } else {
    console.log(answers)
    process.exit()
  }
})
process.on('exit', () => {
  console.log(`
    Nice!, You learned: ${answers[1]}.
    When possible, get better at: ${answers[2]}.
     Come tomorrow for more thoughts!`)
})
