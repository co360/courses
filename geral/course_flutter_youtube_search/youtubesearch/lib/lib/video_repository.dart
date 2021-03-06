import 'package:youtubesearch/models/video.dart';

abstract class VideoRepository {
  Future<List<Video>> find(String name, {String page});

  Future<Video> findOne(String id);

  Future<String> next();

  Future<String> previous();
}
