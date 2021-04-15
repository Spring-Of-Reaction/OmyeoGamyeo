package com.project.backend.domain;

import com.project.backend.post.domain.entity.Post;
import com.project.backend.post.domain.repository.PostRepository;
import com.project.backend.post.dto.PostSaveRequestDto;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.boot.web.server.LocalServerPort;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.test.context.junit4.SpringRunner;

import java.time.LocalDate;
import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;

@RunWith(SpringRunner.class)
@SpringBootTest(webEnvironment= SpringBootTest.WebEnvironment.RANDOM_PORT)
public class PostControllerTest {

    @LocalServerPort
    private int port;

    @Autowired
    private TestRestTemplate resttemplate;

    @Autowired
    private PostRepository postRepository;

    @Test
    public void Post_등록() throws Exception {
        //given
        String nickname = "테스트 닉네임";
        String title="테스트 게시글";
        String content="테스트 본문";
        Integer category = 1;
        Integer views = 1;
        String filename = "테스트 파일이름";
        String filepath = "테스트 파일경로";
        LocalDate date = LocalDate.now();

        PostSaveRequestDto requestDto = PostSaveRequestDto.builder()
                .nickname(nickname)
                .title(title)
                .content(content)
                .category(category)
                .views(views)
                .filename(filename)
                .filepath(filepath)
                .date(date)
                .build();

        String url = "http://localhost:" + port + "api/v1/post";

        //when

        ResponseEntity<Long> responseEntity = resttemplate.postForEntity(url, requestDto, Long.class);

        //then
        assertThat(responseEntity.getStatusCode()).isEqualTo(HttpStatus.OK);
        assertThat(responseEntity.getBody()).isGreaterThan(0L);
        List<Post> all = postRepository.findAll();
        assertThat(all.get(0).getTitle()).isEqualTo(title);
        assertThat(all.get(0).getContent()).isEqualTo(content);

    }

}
