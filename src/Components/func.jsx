export const updateComment = (comments, targetid, newcomment) => {
  console.log(comments);
  // Method of deep copy in js --> shallow copy only help to create new for one level
  const commentCopy = JSON.parse(JSON.stringify(comments));

  for (comments of commentCopy) {
    if (comments.id === targetid) {
      comments.subcomment.push({
        id: new Date().getTime(),
        comment: newcomment,
        subcomment: [],
      });
    }

    if (comments.subcomment.length > 0) {
      comments.subcomment = updateComment(
        comments.subcomment,
        targetid,
        newcomment
      );
    }
  }

  return commentCopy;
};
