const textElement = document.getElementById('text')
const optionButtonsElement = document.getElementById('option-buttons')

let state = {}

function startGame() {
  state = {}
  showTextNode(1)
}

function showTextNode(textNodeIndex) {
    const textNode = textNodes.find(textNode => textNode.id === textNodeIndex)
    textElement.innerText = textNode.text
    while (optionButtonsElement.firstChild) {
      optionButtonsElement.removeChild(optionButtonsElement.firstChild)
    }
  
    textNode.options.forEach(option => {
      if (showOption(option)) {
        const button = document.createElement('button')
        button.innerText = option.text
        button.classList.add('btn')
        button.addEventListener('click', () => selectOption(option))
        optionButtonsElement.appendChild(button)
      }
    })
  }

  function showOption(option) {
    return option.requiredState == null || option.requiredState(state)
  }
  
  function selectOption(option) {
    const nextTextNodeId = option.nextText
    if (nextTextNodeId <= 0) {
      return startGame()
    }
    state = Object.assign(state, option.setState)
    showTextNode(nextTextNodeId)
  }

const textNodes = [
    {
        id: 1,
        text: "You awaken on a bed. To your left is a window and your right is an open door.",
        options: [
            {
                text: 'Go left',
                nextText: 2
            },
            {
                text: 'Go right',
                nextText: 3
            }
            
        ]
    },
    {
        id: 2,
        text: "You come apon a window that shows a very beautiful day outside. There is a key on the windowsill.",
        options: [
            {
                text: 'Take key',
                nextText: 4
            },
            {
                text: 'Go back',
                nextText: 1
            }
            
        ]
    },
    {
        id: 3,
        text: "You walk out the open door and come across a hallway. There are several doors and a strange man huddled in a corner. There is also the end of the hallway.",
        options: [
            {
                text: 'Talk to strange man.',
                nextText: 5
            },
            {
                text: 'Go Forward',
                nextText: 6
            },
            {
                text: 'Go Back',
                nextText: 1
            },
            {
                text: 'Stand there and wallow in your misery',
                nextText: 7
            }
            
        ]
    },
    {
        id: 4,
        text: "Alas! When you try and take the key, a noxious fume billows in. Your sight fades to black.",
        options: [
            {
                text: 'Restart',
                nextText: -1
            },
            
        ]
    },
    {
        id: 5,
        text: "You head over to try and ask the strange man some questions. On closer look, the man has a wild look in his eyes. He's mumbling something about ducks, but you can't make much more out than that.",
        options: [
            {
                text: 'Try to listen',
                nextText: 8
            },
            {
                text: 'back away slowly',
                nextText: 3
            }
            
        ]
    },
    {
        id: 6,
        text: "You enter into a very spacious living room. There's a nice couch and coffe table, though the table is askew by several degrees. You can see the front door in front of you.",
        options: [
            {
                text: 'Go forward',
                nextText: 9
            },
            {
                text: 'sit on couch',
                nextText: 10
            },
            {
                text: 'set coffee table straight',
                nextText: 11
            },
            {
                text: 'Go Back',
                nextText: 3
            }
            
        ]
    },
    {
        id: 7,
        text: "The weight of your situation settles onto your shoulders. Before you know it, you're crying for hours and die of emotional distress.",
        options: [
            {
                text: 'Restart',
                nextText: -1
            },
            
        ]
    },
    {
        id: 8,
        text: "You try and lean closer towards the man despite your best judgement. The man suddenly attacks! He punches you straight in the face and you black out.",
        options: [
            {
                text: 'Restart',
                nextText: -1
            },
            
        ]
    },
    {
        id: 9,
        text: "You come across the front door. Nothing seems to really be unique about it.",
        options: [
            {
                text: 'Open the door',
                nextText: 12
            },
            {
                text: 'Go back',
                nextText: 6
            }
            
        ]
    },
    {
        id: 10,
        text: "You decide to sit on the couch. As you do so, you can't help but feel sleepy, so you lie down and close your eyes. You never wake up.",
        options: [
            {
                text: 'Restart',
                nextText: -1
            },
            
        ]
    },
    {
        id: 11,
        text: "The askew coffee table was bothering you, so you set it straight. After doing so, you can't help but feel like something was suppose to happen, but a developer ran out of time to learn how to make it happen. You shrug and carry on.",
        options: [
            {
                text: 'Go back',
                setState: {unlockDoor: true},
                nextText: 6
            },
            
        ]
    },
    {
        id: 12,
        text: "For supposedly being kidnapped and left in a random house, your kidnappers didn't do a good job of keeping you secure. The door opens with ease and you waltz right out of there.",
        options: [
            {
                text: 'Congratulations! Want to find all the endings?',
                nextText: -1
            },
            
        ]
    },
]

startGame()