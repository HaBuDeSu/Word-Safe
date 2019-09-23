import React, {useState} from 'react'
import DropSquare from './DropSquare.js'
import Tile from './Tile.js'

const WordSafe = () => {

    const [tiles, setTiles] = useState([])
    const [wordLength, setWordLength] = useState(undefined)

    const tileList = "AAAAAAAAABBCCDDDDEEEEEEEEEEEEFFGGGHHIIIIIIIIIJKLLLLMMNNNNNNOOOOOOOOPPQRRRRRRSSSSTTTTTTUUUUVVWWXYYZ??"
    const dropSquares = []

    const renderDropSquares = () => {
        for(let i=0; i<wordLength; i++) {
            return <DropSquare />
        }
    }

    const generateTiles = () => {
        let tiles = []
        for(let i=0; i<7; i++) {
            tiles = [...tiles, tileList.charAt(Math.floor(Math.random()*100))]
        }
        setTiles(tiles)
        dropSquares.push("square")
    }

    return (
        <div className="appContainer">
            <input type="radio" name="length" value={2} onClick={() => setWordLength(2)}></input>
            <p>2</p>
            <input type="radio" name="length" value={3} onClick={() => setWordLength(3)}></input>
            <p>3</p>
            <button onClick={generateTiles}>Start</button>
            <div className="dropZone">
                {dropSquares.map(square => <DropSquare />)}
            </div>
            <div className="tileRack">
                {tiles.map(tile => <Tile tile={tile}/>)}
            </div>
        </div>
    )
}

export default WordSafe