package com.project.backend.domain;

import com.project.backend.comment.domain.entity.Comment;
import com.project.backend.comment.domain.repository.CommentRepository;
import com.project.backend.post.domain.entity.Post;
import com.project.backend.post.domain.repository.PostRepository;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.boot.web.server.LocalServerPort;
import org.springframework.http.HttpMethod;
import org.springframework.test.context.junit4.SpringRunner;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;

import static java.util.Objects.nonNull;
import static org.assertj.core.api.Assertions.assertThat;

@RunWith(SpringRunner.class)
@SpringBootTest(webEnvironment =SpringBootTest.WebEnvironment.RANDOM_PORT )
public class CommentControllerTest {
    @LocalServerPort
    private int port;

    @Autowired
    private TestRestTemplate restTemplate;

    @Autowired
    private PostRepository postRepository;

    @Autowired
    private CommentRepository commentRepository;

    @Test
    public void comment_저장_불러오기(){
        //given
        String nickname = "테스트 닉네임";
        String title="테스트 게시글";
        String content="테스트 본문";
        Integer category = 1;
        Integer views = 1;
        String filename = "테스트 파일이름";
        String filepath = "테스트 파일경로";
        LocalDate date = LocalDate.now();

        postRepository.save(Post.builder()
                .nickname(nickname)
                .title(title)
                .content(content)
                .category(category)
                .views(views)
                .filename(filename)
                .filepath(filepath)
                .date(date)
                .build());

        List<Post> postList = postRepository.findAll();
        String c_content="댓글1";
        String c_writer="글쓴이1";
        Post post = postList.get(0);
        LocalDateTime dateTime= LocalDateTime.now();


        String url = "http://localhost:" + port + "/api/post/1/comment";


        commentRepository.save(Comment.builder()
                .c_content(c_content)
                .c_writer(c_writer)
                .post(post)
                .dateTime(dateTime)
                .build());
        //when
        List<Comment> commentList = commentRepository.findAll();

        //then
        Comment comment = commentList.get(0);
        assertThat(comment.getC_content()).isEqualTo(c_content);

        }


    @Test
    public void comment_삭제() {
        //given
        String nickname = "테스트 닉네임";
        String title = "테스트 게시글";
        String content = "테스트 본문";
        Integer category = 1;
        Integer views = 1;
        String filename = "테스트 파일이름";
        String filepath = "테스트 파일경로";
        LocalDate date = LocalDate.now();

        postRepository.save(Post.builder()
                .nickname(nickname)
                .title(title)
                .content(content)
                .category(category)
                .views(views)
                .filename(filename)
                .filepath(filepath)
                .date(date)
                .build());

        List<Post> postList = postRepository.findAll();
        String c_content = "댓글1";
        String c_writer = "글쓴이1";
        Post post = postList.get(0);
        LocalDateTime dateTime = LocalDateTime.now();

        commentRepository.save(Comment.builder()
                .c_content(c_content)
                .c_writer(c_writer)
                .post(post)
                .dateTime(dateTime)
                .build());

        //when
        List<Comment> commentList = commentRepository.findAll();
        Comment testcomment = commentList.get(0);

        assertThat(nonNull(testcomment)); //comment 객체 있었음

        String url = "http://localhost:" + port + "/api/post/1/comment" + testcomment.getCid();

        restTemplate.delete(url, HttpMethod.DELETE, testcomment);
        //then
        assertThat(commentRepository.findAll().isEmpty()); //comment 객체 삭제되었음
    }

}
