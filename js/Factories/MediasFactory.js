class MediasFactory {
  constructor(data) {
    // IF the media is a video, apply the class VideoMedia
    if (data.video != null) {
      return new VideoMedia(data)
      // ELSE IF the media is an image, apply the class ImageMedia
    } else if (data.image != null) {
      return new ImageMedia(data)
      // ELSE log unknow type format
    } else {
      console.log('Unknown type format')
    }
  }
}
