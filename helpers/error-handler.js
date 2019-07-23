module.exports = {
  handleError: (err, req, res) => {
    if(err.code === '23505' && err.detail.includes('title')) {
      return res.status(400)
        .json({ message: 'Supplied title field already exists' });
    }
    res.status(500)
      .json({
        error: 'Server error'
      });
  }
}
