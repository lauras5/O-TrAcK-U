const mongoose = require('mongoose');
const Schema = mongoose.Schema

const AnimeSchema = new Schema ({
    title : {
        type : String,
        required : true
    },
    seasons : {
    },
    episodes : {
    },
    episodeName : {
    }, 
    songs : {
    }
})

const SeasonSchema = new Schema ({
    number : {
        type: Number
    },
    episodes : {
        type : Schema.Types.ObjectId,
        ref : 'Episode'
    },
    song : {
        type : Schema.Types.ObjectId,
        ref : 'Song'
    },
})

const EpisodeSchema = new Schema ({
    title : {
        type: String,
        required : true
    },
    number : {
        type: Number
    },
    songs : {
        type: [Schema.Types.ObjectId],
        ref : Song
    },
    season : {
        type: Schema.Types.ObjectId,
        ref: 'Season'
    },
    anime : {
        type: Schema.Types.ObjectId,
        ref: 'Anime'
    }
})

const SongSchema = new Schema ({
    title: {
        type: String,
        required : true,
        unique: true
    },
    artist: {
        type: String
    },
    episode : {
        type : Schema.Types.ObjectId
    },
    season : {
        type : Schema.Types.ObjectId
    },
    anime : {
        type : Schema.Types.ObjectId
    }
})

const Anime = mongoose.model('Anime', AnimeSchema);

const Season = mongoose.model('Season', SeasonSchema);

const Episode = mongoose.model('Episode', EpisodeSchema);

const Song = mongoose.model('Song', SongSchema);

module.exports = Anime;
module.exports = Season;

