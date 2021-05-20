package com.project.backend.domain;

import com.project.backend.post.domain.entity.Post;
import com.project.backend.post.domain.repository.PostRepository;
import com.project.backend.post.dto.PostSaveRequestDto;
import com.project.backend.post.dto.PostUpdateRequestDto;
import org.junit.After;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.boot.web.server.LocalServerPort;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpMethod;
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
    private TestRestTemplate restTemplate;

    @Autowired
    private PostRepository postRepository;

    @After
    public void tearDown() throws Exception {
        postRepository.deleteAll();
    }

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

        ResponseEntity<Long> responseEntity = restTemplate.postForEntity(url, requestDto, Long.class);

        //then
        assertThat(responseEntity.getStatusCode()).isEqualTo(HttpStatus.OK);
        assertThat(responseEntity.getBody()).isGreaterThan(0L);
        List<Post> all = postRepository.findAll();
        assertThat(all.get(0).getTitle()).isEqualTo(title);
        assertThat(all.get(0).getContent()).isEqualTo(content);

    }

    @Test
    public void Post_수정() throws Exception {
        //given
        Post savedPost = postRepository.save(Post.builder()
                .nickname("nickname")
                .title("title")
                .content("content")
                .category(1)
                .views(1)
                .filename("filename")
                .filepath("filepath")
                .date(LocalDate.now())
                .build());

        Long updateId = savedPost.getPid();
        String expectedTitle = "title2";
        String expectedContent = "content2";


        PostUpdateRequestDto requestDto = PostUpdateRequestDto.builder()
                .title(expectedTitle)
                .content(expectedContent)
                .build();


        String url = "http://localhost:" + port + "/api/v1/post/" + updateId;

        HttpEntity<PostUpdateRequestDto> requestEntity = new HttpEntity<>(requestDto);
            //System.out.println(requestEntity); -> <com.project.backend.post.dto.PostUpdateRequestDto@23f2f22d,[]>

        //when
        ResponseEntity<Long> responseEntity = restTemplate.exchange(url, HttpMethod.PUT, requestEntity, Long.class);
            /*exchange : HTTP 메서드, URL, 헤더 및 본문을 포함한 RequestEntity를 입력받아 ResponseEntity를 리턴 -> Class 대신 ParameterizedTypeReference 사용하여 제네릭타입 응답 지정 가능*/
            //System.out.println(responseEntity); -> <200,1,[Content-Type:"application/json", Transfer-Encoding:"chunked", Date:"Thu, 15 Apr 2021 15:14:31 GMT", Keep-Alive:"timeout=60", Connection:"keep-alive"]>

        //then
        assertThat(responseEntity.getStatusCode()).isEqualTo(HttpStatus.OK);
        assertThat(responseEntity.getBody()).isGreaterThan(0L);

        List<Post> all = postRepository.findAll();

        assertThat(all.get(0).getTitle()).isEqualTo(expectedTitle);
        assertThat(all.get(0).getContent()).isEqualTo(expectedContent);

    }

    @Test
    public void Post_삭제() throws Exception{
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

        Integer deleteId = requestDto.getPid();

        String url = "http://localhost:" + port + "api/v1/post" + deleteId;

        //when
        restTemplate.delete(url, HttpMethod.DELETE, requestDto);

        //then
        assertThat(postRepository.findAll().isEmpty());


    }



}
