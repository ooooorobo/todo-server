CREATE TABLE IF NOT EXISTS TODO
(
    -- PK
    `id`             BIGINT UNSIGNED                                                  NOT NULL AUTO_INCREMENT,
    PRIMARY KEY (id),

    -- Columns
    `contents`       CHAR(255)                                                        NOT NULL,
    `completed`      VARCHAR(4) DEFAULT 'N'                                           NOT NULL,

    -- FK
    `target_user_id` BIGINT UNSIGNED                                                  NOT NULL,
    INDEX idx__TODO__target_user_id (target_user_id),


    -- Common
    `locked`         VARCHAR(4) DEFAULT 'N'                                           NOT NULL,

    `created_by`     BIGINT UNSIGNED                                                  NOT NULL,
    `updated_by`     BIGINT UNSIGNED                                                  NOT NULL,
    `deleted_by`     BIGINT UNSIGNED                                                  NULL,

    `created_at`     DATETIME   DEFAULT CURRENT_TIMESTAMP                             NOT NULL,
    `updated_at`     DATETIME   DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP NOT NULL,
    `deleted_at`     DATETIME                                                         NULL
) ENGINE = InnoDB
  DEFAULT CHARSET = UTF8MB4;