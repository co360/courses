package br.com.flaviogf;

public class Lesson implements Comparable<Lesson> {
    private String title;
    private int time;

    public Lesson(String title, int time) {
        this.title = title;
        this.time = time;
    }

    public String getTitle() {
        return title;
    }

    public int getTime() {
        return time;
    }

    @Override
    public int compareTo(Lesson lesson) {
        return title.compareTo(lesson.title);
    }

    @Override
    public String toString() {
        return String.format("Lesson[title=%s, time=%d]", title, time);
    }
}
