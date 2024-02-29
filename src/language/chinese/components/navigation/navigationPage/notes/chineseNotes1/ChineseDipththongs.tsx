import { Box, Typography } from "@mui/material";

function ChineseDiphthongs() {
  return (
    <Box>
      <Typography variant="h4" textAlign="center" pt={3} pb={3}>
        Diphthongs 复合元音
      </Typography>
      <Box>
        <Typography>ai - aika / 时间</Typography>
        <Typography>ei - eilen, ei / 昨天，不</Typography>
        <Typography>oi - toinen / 第二的，另一个</Typography>
        <Typography>ui - uida / 游泳</Typography>
        <Typography>yi - Hyi! / 哕！</Typography>
        <Typography>äi - äiti / 母亲</Typography>
        <Typography>öi - öitö! / 晚安</Typography>
        <Typography>au - auto / 汽车</Typography>
        <Typography>eu - peura / 驯鹿</Typography>
        <Typography>iu - viulu / 提琴</Typography>
        <Typography>ou - joulu / 圣诞节</Typography>
        <Typography>äy - käydä / 拜访</Typography>
        <Typography>öy - köyhä / 穷</Typography>
        <Typography>ey - keskeytys / 中断、中止</Typography>
        <Typography>iy - vihkiytyä / 为...献身</Typography>
        <Typography>ie - kieli / 语言</Typography>
        <Typography>uo - juoda / 喝</Typography>
        <Typography>yö - yö, työ / 晚上，工作</Typography>
      </Box>
    </Box>
  );
}

export default ChineseDiphthongs;
