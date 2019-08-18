module.exports = {
  validateTask: (req, res, next) => {
    const { title, description, completed } = req.body;

    if(!title || title.trim() === '') {
      return res.status(400)
      .json({ message: 'Missing required title field' });
    }
    if(!description || description.trim() === '') {
      return res.status(400)
      .json({ message: 'Missing required description field' });
    }
    if(completed) {
      if(completed !== true && completed !== false) {
        return res.status(400)
        .json({ message: 'completed field can only hold boolean value' });
      }
    }
    next();
  }
}
