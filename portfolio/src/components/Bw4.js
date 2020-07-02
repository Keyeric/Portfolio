import React from "react";
import clsx from "clsx";
import {
  Card,
  CardContent,
  CardHeader,
  Typography,
  CardMedia,
  Collapse,
  IconButton,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  text: {
    maxWidth: "75%",
    background: theme.status.black,
    padding: "3%",
    "& span": {
      fontSize: "2.4rem",
      color: theme.status.white,
      [theme.breakpoints.down("sm")]: {
        fontSize: "1.1rem",
      },
    },
  },
  bw4: {
    color: theme.status.white,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    borderRadius: "5rem",
    [theme.breakpoints.down("lg")]: {
      flexDirection: "column",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "1rem",
    },
    // "& h4": {
    //   fontSize: "1.4rem"
    // },
    "& p": {
      [theme.breakpoints.down("md")]: {
        fontSize: "0.9rem",
      },
      [theme.breakpoints.down("sm")]: {
        fontSize: "0.6rem",
      },
    },
  },
  bw4Lesson: {
    color: theme.status.orange,
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
}));

export default function Bw4() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (
    <Card className={classes.text}>
      <CardHeader
        // <Typography variant="h4">
        title="Build Week 4"
        // </Typography>
      />

      <CardContent className={classes.bw4}>
        <Typography variant="body1">
          This Build doesn't have a name or logo like Build Week 1 did due to
          the fact that I worked on the backend exclusively
          <br />
          Let's talk about it.
        </Typography>
      </CardContent>
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

      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent className={classes.bw4}>
          <Typography variant="body1">
            Gave up on the idea of writing articles per Build Week. It's hard
            enough to remember to do YouTube on a regular basis. It has
            definitely been quite a journey from my first Core Build Week to my
            last. I moved from the east coast of the United States (Maryland) to
            the almost West Coast (Arizona). I was homeless for a while. And
            even switched from Windows to Mac Operating System.
            <br />
            But this card is about Build Week, not my life.
          </Typography>
          <br />
          <Typography variant="body1">
            First things first: The project and my initial thoughts.
            <br />
            Up to this point, Backend Development had been a breeze for me. It
            is a stark contrast from the struggle I endured in Frontend. out of
            the 3 Sprints leading up to the actual build, i scored a 2, a 3, and
            another 2, with no retakes, no cramming, and frankly finishing early
            every time. I really felt like I’d found my “comfort zone”.
            <br />
            So I wasn’t too worried about build week but my TL gave us some
            advice
            <br />
            “If you want to have a good build week, DON’T choose a project that
            collaborates with Data Science.”
            <br />
            He gave us an example of how 2 students from the same cohort (his
            group) had very different experiences. One student picked a project
            without DS and created a 2-3 tables and was basically done and got a
            3 on his build. While the other student had a DS project and was
            adding tables upon tables upon tables due to predictions and other
            such things that the DS students needed for their portion.
          </Typography>
          <br />
          <Typography variant="body1">
            Needless to say, I was completely convinced to avoid any projects
            with Data Science attached to the name. I ended up getting a project
            for an online schooling resource.
            <br />
            The Idea was that for locations with an overabundance of students
            and shortage of teachers, that the older folks of the community
            could volunteer as teachers to take on some of the burden.
            <br />
            Not unlike Lambda School, from a certain view
            <br />
            So I was introduced to my team on Friday afternoon and was creating
            the server on Saturday morning. I was told by some seniors during an
            Arizona meetup that builds go much smoother if backend gets around
            80% done over the weekend, so everyone else can hit the ground
            running. So thats what I did.
          </Typography>
          <br />
          <Typography variant="body1">
            I created five tables, one each for Admins, Teachers/Volunteers, and
            Students and one the to-do lists admins would assign to T/Vs and one
            for the list items contained within.
            <br />
            from that point i proceeded to build out the functionality based on
            the flow of
            <br />
            1) Admin registers/logs in {">"} T/V registers/logs in {">"} Student
            registers/logs in {">"}
            <br />
            2) Admin creates/assigns T/Vs to-do lists {">"} T/Vs check off items
            as completed
            <br />
            3) Admin B should not be able to assign things to T/V A, and T/Vs
            should not be able to edit the lists they were assigned.
          </Typography>
          <br />
          <Typography variant="body1">
            Everything was going well, with the usual development hiccups
            (misspellings, that function doesn't do what i thought it would,
            etc) and on Tuesdays, one of our two React 2 (Build Week 3 for them)
            developers had to bow out due to personal issues.
            <br />
            Our remaining React 2 Dev felt all the pressure and struggled for
            the rest of the week, even though the backend was effectively ready
            for them.
          </Typography>
          <br />
          <Typography variant="body1">
            On Wednesday morning, due to some communication issues on the
            various required registration data (the registration and login data
            formats was pinned in slack but due to skimming the text, did not
            realize that T/V and Student required the ID of the user directly
            above them in the chain of command/order (meaning to register, a T/V
            needed the id of the admin in charge of them, and students needed
            their T/V's. The React Devs tried to register without these IDs and
            got 400 error)), they and the singular React 1 Dev decided to only
            use the Student Endpoint due to its simplicity.
            <br />
            on Thursday morning, due to the student endpoint not having full
            CRUD operations (Create, Update, and Delete) the React 2 Dev decided
            to use a completely different backend to pass their Build Week
            requirements.
          </Typography>
          <br />
          <Typography variant="body1">
            Personally, I was angry and devastated. If they had used the Admin
            Endpoint as I and the the Project Lead advised, they would have
            their CRUD Ops, and if they had checked the pseudo-documentation,
            they would not have been stuck on the 400 error.
            <br />
            This is the lesson of this build week:
          </Typography>
          <br />
          <Typography variant="body1" className={classes.bw4Lesson}>
            Communication and Documentation is the most important thing in a
            team setting.
          </Typography>
          <CardMedia>
            <img src="../images/postgres.png" alt="Postgres Table" />
          </CardMedia>
        </CardContent>
      </Collapse>
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
    </Card>
  );
}
