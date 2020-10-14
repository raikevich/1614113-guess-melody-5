const AVATAR_URL = `https://api.adorable.io/avatars/128`;

export default [
  {
    type: `genre`,
    genre: `rock`,
    answers: [{
      src: `https://upload.wikimedia.org/wikipedia/commons/9/91/01_Il_lungo_addio_-_Non_sar%C3%A0.ogg`,
      genre: `rock`
    }, {
      src: `https://upload.wikimedia.org/wikipedia/commons/f/f4/Bluesharp_riff.ogg`,
      genre: `blues`
    }, {
      src: `https://upload.wikimedia.org/wikipedia/commons/d/d7/Exploration_en_do_mineur_jazz.wav`,
      genre: `jazz`
    }, {
      src: `https://upload.wikimedia.org/wikipedia/commons/4/47/Examplesong.ogg`,
      genre: `rock`
    }]
  }, {
    type: `artist`,
    song: {
      artist: `Jim Beam`,
      src: `https://upload.wikimedia.org/wikipedia/commons/d/db/Keef_Trouble%2C_Oasis.oga`
    },
    answers: [{
      picture: `${AVATAR_URL}/${Math.random()}`,
      artist: `Jameson`
    }, {
      picture: `${AVATAR_URL}/${Math.random()}`,
      artist: `Jim Beam`
    }, {
      picture: `${AVATAR_URL}/${Math.random()}`,
      artist: `Jack Daniels`
    }]
  }, {
    type: `genre`,
    genre: `blues`,
    answers: [{
      src: `https://upload.wikimedia.org/wikipedia/commons/9/91/01_Il_lungo_addio_-_Non_sar%C3%A0.ogg`,
      genre: `rock`
    }, {
      src: `https://upload.wikimedia.org/wikipedia/commons/4/47/Examplesong.ogg`,
      genre: `rock`
    }, {
      src: `https://upload.wikimedia.org/wikipedia/commons/d/d7/Exploration_en_do_mineur_jazz.wav`,
      genre: `jazz`
    }, {
      src: `https://upload.wikimedia.org/wikipedia/commons/f/f4/Bluesharp_riff.ogg`,
      genre: `blues`
    }]
  }, {
    type: `artist`,
    song: {
      artist: `Jack Daniels`,
      src: `https://upload.wikimedia.org/wikipedia/commons/d/db/Keef_Trouble%2C_Oasis.oga`
    },
    answers: [{
      picture: `${AVATAR_URL}/${Math.random()}`,
      artist: `Jack Daniels`
    }, {
      picture: `${AVATAR_URL}/${Math.random()}`,
      artist: `Jameson`
    }, {
      picture: `${AVATAR_URL}/${Math.random()}`,
      artist: `Jim Beam`
    }]
  }
];
