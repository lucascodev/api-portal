import { MigrationInterface, QueryRunner } from 'typeorm';

export class chamados1645182111405 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `
            CREATE TABLE MAN_CAD_ORDEM_SERVICOS(
            MAN_ID NUMBER(10) NOT NULL,
            MAN_TITULO VARCHAR2(255) NOT NULL,
            MAN_NIVEL NUMBER(10),
            MAN_STATUS VARCHAR2(20),
            MAN_SOLICITANTE VARCHAR2(60),
            MAN_SETOR VARCHAR2(100),
            MAN_ATENDENTE VARCHAR2(75),
            MAN_NOME_OPERADOR VARCHAR2(100),
            MAN_TIPO_SERVICO VARCHAR2(100),
            MAN_COD_MAQUINA NUMBER(10),
            MAN_DESCRICAO VARCHAR2(150),
            MAN_OBSERVACAO CLOB,
            MAN_GRUPO VARCHAR2(2),
            MAN_DATA_ABERTURA TIMESTAMP(2),
            MAN_USER_ID NUMBER(10),
            MAN_USER_DEL VARCHAR2(50),
            MAN_DATA_DEL DATE,
            MAN_DELETE VARCHAR2(10)
            )
          `,
    );

    await queryRunner.query(
      `
        CREATE SEQUENCE MAN_CAD_ORDEM_SERVICOS_SEQ START WITH 1
      `,
    );

    await queryRunner.query(
      `
        CREATE OR REPLACE TRIGGER MAN_CAD_ORDEM_SERVICOS_BIR
        BEFORE INSERT ON MAN_CAD_ORDEM_SERVICOS
        FOR EACH ROW
        
        BEGIN
          SELECT MAN_CAD_ORDEM_SERVICOS_SEQ.NEXTVAL
          INTO   :new.MAN_ID
          FROM   dual;
        END;
      `,
    );

    await queryRunner.query(
      ` 
            ALTER TABLE MAN_CAD_ORDEM_SERVICOS ADD 
            (CONSTRAINT MAN_CAD_ORDEM_SERVICOS_PK PRIMARY KEY (MAN_ID))
          `,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('DROP SEQUENCE MAN_CAD_ORDEM_SERVICOS_SEQ');
    await queryRunner.query(`DROP TRIGGER MAN_CAD_ORDEM_SERVICOS_BIR`);
    await queryRunner.query(
      ` 
          ALTER TABLE MAN_CAD_ORDEM_SERVICOS
          DROP CONSTRAINT MAN_CAD_ORDEM_SERVICOS_PK
          `,
    );
    await queryRunner.query(`DROP TABLE MAN_CAD_ORDEM_SERVICOS`);
  }
}
