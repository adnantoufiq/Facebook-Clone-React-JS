import React from "react";
import "./Feed.css";
import PostSender from "./PostSender";
import StoryReel from "./StoryReel";
import Post from "./Post";

const Feed = () => {
  return (
    <div className="feed">
      {/* storyReel */}
      <StoryReel />
      {/* MessageSender */}
      <PostSender />
      <Post
        profilePic="https://scontent.fdac4-1.fna.fbcdn.net/v/t39.30808-6/273025994_3062688307304188_8199585395123126530_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeHUuroFjASfJeDuDnKcyimDHlvBrEJBl4UeW8GsQkGXhSRw9pNrt-MC62xYsRYdPEg3rHz8jmfrWJqXacmWUn5z&_nc_ohc=hHMPcgYW8fcAX9FLL0Y&_nc_pt=1&_nc_zt=23&_nc_ht=scontent.fdac4-1.fna&oh=00_AT9MxqYZujZ8WqzJOZVJTjposKOqbtMhEC_pHRChrXZF-A&oe=61FDB1AD"
        message="this is so nice"
        timestamp="this is fun"
        username="toufiqqqq"
        image="https://www.imgacademy.com/themes/custom/imgacademy/images/helpbox-contact.jpg"
      />
    </div>
  );
};

export default Feed;
