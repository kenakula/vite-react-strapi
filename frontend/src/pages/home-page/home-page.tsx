import { appStoreSelector, authStoreSelector, useAppDispatch, useAppSelector } from '@app/store';
import { toggleColorMode } from '@app/store/app';
import { Container } from '@components/container';
import { ReactElement } from 'react';

import { ColorMode } from './color-mode';

const HomePage = (): ReactElement => {
  const { appName } = useAppSelector(appStoreSelector);
  const { user } = useAppSelector(authStoreSelector);
  const dispatch = useAppDispatch();

  const handleChangeColorMode = (): void => {
    dispatch(toggleColorMode());
  };

  return (
    <Container className="home-page">
      <h1>{appName}</h1>
      <h3>{user?.email}</h3>
      <ColorMode/>
      <button onClick={handleChangeColorMode}>change</button>
      <br/>
      <br/>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta dolor eos iste iure laboriosam mollitia non quis
      sit ullam velit! Adipisci aliquam animi at commodi, consequatur deleniti error itaque laborum libero magni
      mollitia nesciunt nisi nulla numquam odit officia officiis porro quasi repellendus suscipit ullam vel, voluptates
      voluptatum! Aliquam asperiores, beatae consequuntur corporis cumque dignissimos distinctio ea eius necessitatibus
      nesciunt odit optio provident quidem, sapiente sequi voluptas voluptates. A accusamus adipisci alias at autem
      consectetur consequuntur cupiditate dolorum eaque eius est eum facere iusto libero magnam minus modi molestiae
      nihil nisi nobis nostrum odit officia praesentium quasi quos recusandae repellendus saepe sequi sint sit soluta
      tempore temporibus totam ut, veritatis vitae voluptatum. Amet atque error eum iusto nam perferendis quia. Adipisci
      consequatur ea eos et eveniet iste magnam minus numquam optio perferendis quasi quisquam quo, saepe soluta sunt.
      Accusantium architecto at consequuntur deserunt dolores ea eligendi error et, impedit laborum natus nulla odio
      quibusdam repudiandae veritatis! Alias asperiores at autem consequuntur cupiditate dolores eaque earum eveniet
      iure maiores nemo nobis officiis quae quis ratione reiciendis saepe soluta tempora velit, vitae! Ad aperiam
      assumenda beatae consectetur consequatur eaque explicabo, illo mollitia nam neque numquam odio pariatur quae, quod
      reiciendis saepe soluta.
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci asperiores at atque consectetur cum deserunt
      enim est eum exercitationem explicabo, fugiat illo inventore libero natus necessitatibus nisi nobis non nulla
      officiis optio quisquam sed totam unde vel veritatis. Corporis deleniti doloribus eligendi eum maiores quas qui
      sint soluta! Commodi corporis et iure magnam nulla provident. Dolorem doloremque dolorum ea et facilis harum ipsum
      maxime modi, nisi perspiciatis quis repellendus similique sunt! Consectetur deleniti eum explicabo ratione veniam.
      Amet animi aut culpa dolore eaque earum enim facere fugit inventore, ipsa ipsum mollitia neque possimus quae
      quibusdam quis quod quos rerum voluptas, voluptatum! Accusamus at aut blanditiis dolores iusto magnam maiores
      optio, placeat. Aspernatur at est nulla. Architecto expedita illo optio velit! Aliquam animi aut consequuntur
      deserunt et explicabo minus molestias numquam optio pariatur, quas qui repudiandae saepe sit, vel! At commodi
      dolorum eius eligendi hic ipsam numquam recusandae voluptates? Accusamus adipisci aspernatur aut consectetur
      consequatur, consequuntur culpa cupiditate debitis distinctio doloremque dolorum eligendi exercitationem explicabo
      fuga fugit id incidunt modi necessitatibus nisi non odit quaerat quam, quasi quia quod ullam vitae voluptatem.
      Esse facilis iste magnam nesciunt quam suscipit, vitae! Aperiam aspernatur culpa doloribus eos hic ipsa iste natus
      non, officia reiciendis. Dolores fugiat magni placeat quia saepe sed tempore unde veritatis vero? Accusantium hic
      pariatur sapiente? Dolor, ducimus, ratione. A alias aperiam cum dicta dolores dolorum ducimus eaque expedita
      fugiat maxime minus molestias natus necessitatibus perspiciatis provident, qui quis quisquam reprehenderit tempore
      unde veritatis vitae voluptates. Aliquid eius ex facilis iusto libero, minus mollitia officia quaerat quibusdam,
      quo temporibus ullam velit veniam vitae, voluptatem. Animi, assumenda distinctio ex libero modi molestias natus
      obcaecati provident sed sequi. Cumque delectus error esse est eveniet excepturi exercitationem, hic minima modi
      nobis nostrum quaerat quibusdam rem vel voluptas. Accusantium aliquid aspernatur, at beatae consequatur cum cumque
      deserunt dolor dolorum ducimus earum eos esse eum eveniet expedita ipsa ipsam ipsum minima molestias mollitia,
      necessitatibus obcaecati porro quae quas quis reprehenderit rerum similique, soluta totam velit vitae voluptas
      voluptatem voluptates! Accusamus assumenda autem distinctio dolor doloremque dolorum, expedita incidunt nemo
      obcaecati placeat, porro praesentium voluptatem. Adipisci alias aliquam asperiores atque deserunt dicta ea eos
      facilis hic ipsam ipsum iusto magni minus, molestiae mollitia nobis nostrum omnis optio, porro praesentium
      provident quisquam reprehenderit repudiandae similique tempora voluptatem voluptatum! Commodi cupiditate illum
      maiores neque quam recusandae veniam! Dolor minima repudiandae ullam! Aliquam architecto at commodi consequuntur
      cumque delectus dicta dolorem harum impedit nisi officia optio rem repellendus repudiandae, saepe temporibus
      voluptatem. Asperiores autem consequatur dicta dignissimos ea earum eius eligendi, eveniet ex excepturi facilis
      illo impedit inventore mollitia nemo pariatur quibusdam repellat reprehenderit repudiandae sed, soluta tempora
      tempore temporibus ut voluptatibus? Accusantium ad architecto cumque cupiditate deserunt dolorem, eius eum
      expedita incidunt, magnam non numquam odio odit perspiciatis provident quae quibusdam tempore, ullam vel
      voluptates. Adipisci animi architecto consequatur consequuntur, dolorem ea eligendi eos fugiat illum ipsa iusto
      necessitatibus nemo quibusdam quod quos repellendus reprehenderit suscipit unde, veniam voluptas! Animi aut,
      eveniet iure neque nihil officia repellendus voluptatibus!
    </Container>
  );
};

export default HomePage;
