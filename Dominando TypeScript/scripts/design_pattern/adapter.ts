class Youtube {
    public getYoutubeToken() { }
}

class YoutubeAdapter {
    public getToken() {
        const youtube = new Youtube();
        return youtube.getYoutubeToken();
    }
}

const youtubeAdapter = new YoutubeAdapter();
const token = youtubeAdapter.getToken();