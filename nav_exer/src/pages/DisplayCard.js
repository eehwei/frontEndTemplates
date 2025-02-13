import Card1 from "../cards/card1";
import Card2 from "../cards/card2";
import Card3 from "../cards/card3";
import Card4 from "../cards/card4";
import imagepath from '../asset/tqnextimg.jpg'
import studypic from '../asset/study.jpg'
import { Box } from "@mui/material";

export default function DisplayCard() {
  return (
    <>
    <Box display="flex" gap="20px" margin="20px">
      <Card1
        backgroundColor="#47d18a"
        title="New Momentum"
        subtitle="strategy"
        caption="tryfugihbkhvewd dvbkjlvcgjkbbvc"
        year="3"
        percentage="27.80"
      />

      <Card1
        backgroundColor="black"
        color="white"
        title="New Momentum"
        subtitle="strategy"
        caption="tryfugihbkhvewd dvbkjlvcgjkbbvc"
        year="3"
        percentage="7.80"
      />

      <Card1
        backgroundColor="#d194e0"
       
        title="New Momentum"
        subtitle="strategy"
        caption="tryfugihbkhvewd dvbkjlvcgjkbbvc"
        year="3"
        percentage="7.80"
      />
      
    </Box>

    <Box display="flex" gap="20px" margin="20px">
        <Card2
            singerName="Ariana Grande"
            songName="Thank u,next"
            image={imagepath}
        
        />
        <Card2
            singerName="meinv"
            songName="Study Music"
            image={studypic}
        
        />
    </Box>

    <Box display="flex" direction="row">
        <Card3
        percentage="70"
         barColor="pink"
         title="Total Orders"
         caption="Last year expenses"
         amount="1896"
         barLabel=" YoY Growth"
         amountColour="green"
        />

<Card3
        percentage="60"
         barColor="green"
         title="Products Sold"
         caption="Revenue streams"
         amount="$3M"
         barLabel=" Sales"
         amountColour="#fae60c"
        />l
    </Box>

<Box>
    <Card4
     percentage1 = "20"
     percentage2 = "40"
     percentage3 = "60"
     percentage4 = "80"
     barColor="green"
     title="Products Sold"
     caption="Revenue streams"
     amount="$3M"
     amountColour="#fae60c"
     conclusion="dfghjk dfghjkhjgsdvhkbln;vjcg"
     field1="marketing"
     field2="advertisement"
     field3="advertisement"
     field4="advertisement"
    />
</Box>
   
    </>
  );
}
