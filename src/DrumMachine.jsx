import { useState, useEffect } from 'react'

function DrumMachine() {

    const keyPads = [
      ["Q", 'https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-1.mp3', "Heater 1"]
    , ["W", 'https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-2.mp3', "Heater 2"]
    , ["E", 'https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-3.mp3', "Heater 3"]
    , ["A", 'https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-4_1.mp3', "Heater 4"]
    , ["S", 'https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-6.mp3', "Heater 6"]
    , ["D", 'https://cdn.freecodecamp.org/testable-projects-fcc/audio/Dsc_Oh.mp3',"Dsc-Oh"]
    , ["Z", 'https://cdn.freecodecamp.org/testable-projects-fcc/audio/Kick_n_Hat.mp3', "Kick_n_Hat"]
    , ["X", 'https://cdn.freecodecamp.org/testable-projects-fcc/audio/RP4_KICK_1.mp3', "Kick_1"]
    , ["C", 'https://cdn.freecodecamp.org/testable-projects-fcc/audio/Cev_H2.mp3', "Cev_H2"]]


    const [soundName, setSoundName] = useState('');

    const handleClick = (event) => {
        const audioElement = event.currentTarget.querySelector('audio');
        audioElement.play();
        const keyPad = keyPads.find((el) => el[0] === audioElement.id)
        setSoundName(keyPad[2]);
    }

    const handleKeyPress = (event) => {
        const keyPad = keyPads.find((el) => el[0] === event.key.toUpperCase())
        if (keyPad) {
            document.getElementById(keyPad[0]).play()
            setSoundName(keyPad[2]);
        }
    }
 
    useEffect(() => {
        window.addEventListener('keydown', handleKeyPress);
        return () => window.removeEventListener('keydown', handleKeyPress);
    }, [])

    return(
        <div id="drum-machine">
            <div className='pads-container'>
                {keyPads.map((arr, index) =>
                     <div className="drum-pad" id={index} key={index} onClick={handleClick}>
                        <audio className='clip' id={arr[0]} src={arr[1]}></audio>
                        {arr[0]}
                    </div>)}
            </div>
            <div className='control-panel'>
                <div className='display-sound' id='display'>
                    <p>{soundName}</p>
                </div>
            </div>
        </div>
    )
}

export default DrumMachine