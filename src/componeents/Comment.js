// Comment.js

import React, { useState } from 'react';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/joy/Button';
import { Input } from '@mui/joy';
import SendIcon from '@mui/icons-material/Send';
import { useDispatch, useSelector } from 'react-redux';
import { addReply } from '../Store/commentActions';




const Comment = ({ item }) => {
    const childreply = useSelector((state)=> state.comment.child );
    const disp = useDispatch();
    const [replyMessage, setreplyMessage] = useState('');
    const [replyingTo, setReplyingTo] = useState(null);
    const [viewcomments, setviewcomments] = useState(false);
    const handleReplyClick = (commentId) => {
        setReplyingTo(commentId);
    };

    const handleCancelReply = () => {
        setReplyingTo(null);
    };
    const handleChange = (e) => {
        setreplyMessage(e.target.value);


    };

    const renderChildComments = (childComments) => {
        console.log(childComments)
        return (
            <div>
                {childComments.filter((temp)=> temp.parent === item.id).map((childComment) => (
                    <Comment  item={childComment} />
                ))}
            </div>
        );


    };

    console.log(item);
    return (
        <Card variant="outlined" sx={{ width: '100%' }}>
            <CardContent>
                <Typography level="title-md" sx={{ whiteSpace: 'normal' }}>
                    {item.commentMessage}
                </Typography>
                {replyingTo !== item.id ? (
                    <Button onClick={() => handleReplyClick(item.id)} color="primary" variant="plain" size="sm">
                        Reply
                    </Button>
                ) : (
                    <>
                        <Button onClick={handleCancelReply} color="primary" variant="plain" size="sm">
                            Cancel
                        </Button>
                        <Input onChange={handleChange} value={replyMessage}
                            endDecorator={<SendIcon color='primary' onClick={() => {
                                if(replyMessage !== ''){disp(addReply(replyMessage, item.id));
                                    setreplyMessage('');}
                                else{
                                    alert("enter a valid input");
                                }    
                                
                            }} style={{ cursor: 'pointer' }}

                            />}
                        />
                    </>
                )}
                <Button color="primary" onClick={() => setviewcomments((prevState) => !prevState)} variant="plain" size="sm">
                    View Comments
                </Button>
                {viewcomments && renderChildComments(childreply)}
            </CardContent>
        </Card>
    );
};

export default Comment;
