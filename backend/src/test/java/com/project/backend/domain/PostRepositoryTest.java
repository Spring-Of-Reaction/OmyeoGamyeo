package com.project.backend.domain;

import com.project.backend.post.domain.entity.Post;
import com.project.backend.post.domain.repository.PostRepository;
//import org.aspectj.lang.annotation.After;
import org.junit.After;
//import org.junit.Test;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import java.time.LocalDate;
import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;

@RunWith(SpringRunner.class)
@SpringBootTest
public class PostRepositoryTest {

    @Autowired
    PostRepository postRepository;

    @After
    public void cleanup(){
        postRepository.deleteAll();
    }

    @Test
    public void 게시글저장_불러오기(){
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

        //when
        List<Post> postList = postRepository.findAll();

        //then
        Post post = postList.get(0);
        assertThat(post.getTitle()).isEqualTo(title);
        assertThat(post.getContent()).isEqualTo(content);
    }

    @Test
    public void 카테고리정렬(){
        //given
        postRepository.save(Post.builder()
                .nickname("nickname1")
                .title("title1")
                .content("content1")
                .category(1)
                .views(1)
                .date(LocalDate.now())
                .build());

        postRepository.save(Post.builder()
                .nickname("nickname2")
                .title("title2")
                .content("content2")
                .category(1)
                .views(1)
                .date(LocalDate.now())
                .build());

        postRepository.save(Post.builder()
                .nickname("nickname3")
                .title("title3")
                .content("content3")
                .category(2)
                .views(1)
                .date(LocalDate.now())
                .build());


        //when
        List<Post> postList = postRepository.findByCategory(1);

        //then
        postList.forEach(post -> System.out.println(post.getTitle()));

    }

}
