// material-ui
import { Button, CardMedia, Link, Stack, Typography } from "@mui/material";

// project import
import MainCard from "@/components/main-card";

// assets
import avatar from "@/assets/images/users/avatar-group.png";

// ==============================|| DRAWER CONTENT - NAVIGATION CARD ||============================== //

const NavCard = () => (
  <MainCard sx={{ bgcolor: "grey.50", m: 3 }}>
    <Stack alignItems="center" spacing={2.5}>
      <CardMedia component="img" image={avatar} sx={{ width: 112 }} />
      <Stack alignItems="center">
        <Typography variant="h5"> NavIcon Add </Typography>
        <Typography variant="h6" color="secondary">
          explore more
        </Typography>
      </Stack>
      <Button component={Link} target="_blank" href="/" variant="contained" color="success" size="small">
        hi
      </Button>
    </Stack>
  </MainCard>
);

export default NavCard;
