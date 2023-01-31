import React from "react";
import {MainDesc, Desc} from "./components/main_desc";
import OutService from "./components/out_service";
import { Stack } from "@mui/system";
import { Divider,Box} from "@mui/material";
import notion from "./images/instagram_profile_image.png"
import github from "./images/github3.png"
import clownfish from "./images/clown-fish.gif"
import {SmallTitle} from "./components/title";
import BasicBar from "./components/bars";


export default function AboutUs(){
    return <BasicBar>
        <SmallTitle>부스트캠프 AI Tech 4기 최종프로젝트</SmallTitle>
        <br/>
        <br/>

      <MainDesc>CV-13조 📞031</MainDesc>
      <br/>

      <Stack
        direction="row"
        divider={<Divider orientation="vertical" flexItem />}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        spacing={4}
        sx={{paddingBottom:10}}
      >
        <OutService
          img_src={notion}
          desc_title="Notion page"
          desc = "진행과정 및 진행방식에 대해 정리되어있습니다."
          link = "https://gratis-keyboard-88d.notion.site/Final-Project-cv13-188a946369fd41eda77776eb1f398f07"
        ></OutService>
        <OutService
          img_src={github}
          desc_title="Git Repository"
          desc = "개발 프로세스에 대한 모든 기록이 담겨 있습니다."
          link = "https://github.com/boostcampaitech4lv23cv2/final-project-level3-cv-13"
        ></OutService>
      </Stack>
      <Box style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        sx={{paddingBottom:5}}>

      <img src={clownfish} alt="" width={200}></img>
      </Box>
      <MainDesc>References</MainDesc>
        <Desc><a href="https://www.flaticon.com/free-icons/main-page" title="main page icons">Main page icons created by Mihimihi - Flaticon</a></Desc>
        <Desc><a href="https://www.flaticon.com/free-animated-icons/animal" title="animal animated icons">Animal animated icons created by Freepik - Flaticon</a></Desc>
        <Desc><a href="https://www.flaticon.com/free-icons/fish" title="fish icons">Fish icons created by ultimatearm - Flaticon</a></Desc>
        <Desc><a href="https://www.flaticon.com/free-icons/sashimi" title="sashimi icons">Sashimi icons created by Freepik - Flaticon</a></Desc>
        <Desc><a href="https://www.flaticon.com/kr/free-icons/github" title="github 아이콘">Github 아이콘  제작자: Roundicons Premium - Flaticon</a></Desc>
        <Desc><a href="https://www.flaticon.com/free-icons/drag-and-drop" title="drag and drop icons">Drag and drop icons created by Yogi Aprelliyanto - Flaticon</a></Desc>
        </BasicBar>
}