import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    width:'100%',
    marginBottom:'24px'
  },
  media: {
    height: 0,
    paddingTop: '56.25%',
    transition: 'transform .2s',
    "&:hover": {
      '-ms-transform': 'scale(1.5)',
  '-webkit-transform': 'scale(1.5)',
  transform: 'scale(1.5)' 
    },

  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  
}));

export default function RecipeReviewCard() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        
        title="Chuyện tình buồn bên Hồ than thở"
        subheader="September 14, 2021"
      />
      <div style={{overflow:'hidden'}}>
      <CardMedia
        className={classes.media}
        image="https://www.luxstay.com/blog/wp-content/uploads/2020/02/giai-thoai-tinh-yeu-lang-man-tai-da-lat-11.jpg"
        title="Paella dish"
      />
      </div>
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
        Hồ Than Thở cũng là một cái tên nổi tiếng trên bản đồ du lịch Đà Lạt và chỉ cách trung tâm thành phố Đà Lạt khoảng 6km. Tại đây có hai cây thông quấn quýt như đôi tình nhân rất đẹp nên nhiều du khách tới đây chụp ảnh lưu niệm, song nếu biết chuyện tình nơi “đáy hồ” này chắc hẳn lữ khách sẽ còn bị cuốn hút hơn nhiều.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>
          Đó là câu chuyện tình chung thủy của Hoàng Tùng và Mai Hương gắn liền với điểm du lịch Đà Lạt này từ thế kỷ 18. Họ là một cặp đôi đẹp trong vùng, khi giặc ngoại xâm giày xéo quê nhà, Hoàng Tùng chia tay người yêu lên đường cứu nước và chính bên hồ này, họ gặp nhau hẹn ngày trở về đoàn tụ. Nhưng chẳng bao lâu, Mai Hương ở nhà nghe tin Hoàng Tùng tử trận. Nàng đau lòng ra hồ than khóc, rồi gieo mình xuống dòng nước tự vẫn.  
          </Typography>
          <Typography paragraph>
          Một thời gian sau, Hoàng Tùng thắng trận trở về. Đau xót trước cái chết của người yêu và nhớ lại lời thề hẹn lúc trước, chàng trai cũng chọn kết thúc cuộc đời mình giữa hồ nước xanh thẳm để đoàn tụ với người yêu nơi chín suối. Cảm thương đôi tình nhân chung thủy, người đời gọi tên “hồ Than Thở”.
          </Typography>
          <Typography paragraph>
          Nếu có tour du lịch tham quan hồ Than Thở, bạn sẽ được tận hưởng khung cảnh rừng thông nên thơ với mặt hồ phẳng lặng gợn sóng. Ngồi hóng gió bên hồ, nơi gốc thông già bạn vẫn có thể cảm nhận khung cảnh bi thương của đôi trai gái khi rừng thông cất tiếng rì rầm.
          </Typography>
         
        </CardContent>
      </Collapse>
    </Card>
  );
}