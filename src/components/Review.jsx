import React from 'react';
import { Card, CardContent, CardMedia, CardActions, Typography, Button } from '@mui/material';
import './Review.css'; // Import your component CSS file
import reimg1 from '../assets/images/re1.jpg';

import YouTube from 'react-youtube';

const Review = ({}) => {
    const videoId = 'YBOPloDwUXk';
    return (
        <div className='container'>
            <h1>Happy Clients</h1>
            <div className="cards-container">
                <div className="card-group">
                    <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                            component="img"
                            alt="Client 1"
                            height="140"
                            image={reimg1}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Client 1
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                "We have been receiving tons of compliments on our new website."
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Share</Button>
                            <Button size="small">Learn More</Button>
                        </CardActions>
                    </Card>

                    <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                            component="img"
                            alt="Client 1"
                            height="140"
                            image={reimg1}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Client 1
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                "We have been receiving tons of compliments on our new website."
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Share</Button>
                            <Button size="small">Learn More</Button>
                        </CardActions>
                    </Card>
                    <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                            component="img"
                            alt="Client 1"
                            height="140"
                            image={reimg1}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Client 1
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                "We have been receiving tons of compliments on our new website."
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Share</Button>
                            <Button size="small">Learn More</Button>
                        </CardActions>
                    </Card>
                </div>
            </div>

            <h2>Client Testimonials</h2>
            <div className="video-container">
                <YouTube videoId={videoId} />
            </div>
        </div>
    );
};

export default Review;


