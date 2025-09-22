import Match from '../components/Match'
import { Box } from '@chakra-ui/react'
import LfcLogo from "../../public/logos/LFC.png"
import AtmLogo from "../../public/logos/ATM.png"

const MatchDay = () => {
  return (
    <Box>
      <Match 
        matchNumber={1}
        team1={{ name: "Liverpool FC", logoUrl: LfcLogo ,score: 3}} 
        team2={{ name: "Atletico Madrid", logoUrl: AtmLogo, score: 2 }}
        date="Sept 17, 2025"
        venue="Anfield"
      />
    </Box>
  )
}

export default MatchDay
