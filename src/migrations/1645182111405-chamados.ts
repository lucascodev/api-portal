import { MigrationInterface, QueryRunner } from 'typeorm';

export class chamados1645182111405 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {

    /*
    REDEFINIR MIGRATE E MUDAR PARA MYSQL
    */

    // await queryRunner.query(
    //   `
    //         CREATE TABLE MAN_CAD_ORDEM_SERVICOS(
    //         MAN_ID INT NOT NULL ,
    //         MAN_TITULO VARCHAR(255) NOT NULL,
    //         MAN_NIVEL NUMERIC,
    //         MAN_STATUS VARCHAR(20),
    //         MAN_SOLICITANTE VARCHAR(60),
    //         MAN_SETOR VARCHAR(100),
    //         MAN_ATENDENTE VARCHAR(75),
    //         MAN_NOME_OPERADOR VARCHAR(100),
    //         MAN_TIPO_SERVICO VARCHAR(100),
    //         MAN_COD_MAQUINA NUMERIC,
    //         MAN_DESCRICAO VARCHAR(150),
    //         MAN_OBSERVACAO TEXT,
    //         MAN_GRUPO VARCHAR(2),
    //         MAN_DATA_ABERTURA TIMESTAMP,
    //         MAN_USER_ID NUMERIC,
    //         MAN_USER_DEL VARCHAR(50),
    //         MAN_DATA_DEL DATE,
    //         MAN_DELETE VARCHAR(10)
    //         )
    //       `,
    // );

    // await queryRunner.query(
    //   `
    //     CREATE SEQUENCE MAN_CAD_ORDEM_SERVICOS_SEQ START WITH 1
    //   `,
    // );

    // await queryRunner.query(
    //   `
    //     CREATE OR REPLACE TRIGGER MAN_CAD_ORDEM_SERVICOS_BIR
    //     BEFORE INSERT ON MAN_CAD_ORDEM_SERVICOS
    //     FOR EACH ROW
        
    //     BEGIN
    //       SELECT MAN_CAD_ORDEM_SERVICOS_SEQ.NEXTVAL
    //       INTO   :new.MAN_ID
    //       FROM   dual;
    //     END;
    //   `,
    // );

    // await queryRunner.query(
    //   ` 
    //         ALTER TABLE MAN_CAD_ORDEM_SERVICOS ADD 
    //         (CONSTRAINT MAN_CAD_ORDEM_SERVICOS_PK PRIMARY KEY (MAN_ID))
    //       `,
    // );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    // await queryRunner.query('DROP SEQUENCE MAN_CAD_ORDEM_SERVICOS_SEQ');
    // await queryRunner.query(`DROP TRIGGER MAN_CAD_ORDEM_SERVICOS_BIR`);
    // await queryRunner.query(
    //   ` 
    //     ALTER TABLE MAN_CAD_ORDEM_SERVICOS
    //     DROP CONSTRAINT MAN_CAD_ORDEM_SERVICOS_PK
    //   `,
    // );
    // await queryRunner.query(`DROP TABLE MAN_CAD_ORDEM_SERVICOS`);
  }
}
