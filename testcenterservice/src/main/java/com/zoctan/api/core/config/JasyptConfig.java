package com.zoctan.api.core.config;

import com.zoctan.api.core.rsa.RsaUtils;
import lombok.extern.slf4j.Slf4j;
import org.jasypt.encryption.StringEncryptor;
import org.jasypt.encryption.pbe.PooledPBEStringEncryptor;
import org.jasypt.encryption.pbe.config.SimpleStringPBEConfig;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.util.Base64Utils;

import javax.annotation.Resource;

/**
 * Jasypt 配置
 *
 * @author Zoctan
 * @date 2018/07/21
 */
@Configuration
@Slf4j
public class JasyptConfig {
  @Value("${jasypt.encryptor.password}")
  private String passwordEncryptedByBase64AndRSA;

  @Resource private RsaUtils rsaUtils;

  @Bean
  public StringEncryptor myStringEncryptor() throws Exception {
    // Base64 + RSA 加密的密码
    log.info("{jasypt.encryptor.password}:{}",passwordEncryptedByBase64AndRSA);
    final byte[] passwordEncryptedByRSA =
        Base64Utils.decodeFromString(this.passwordEncryptedByBase64AndRSA);
    final String password = new String(this.rsaUtils.decrypt(passwordEncryptedByRSA));
    // 配置
    final SimpleStringPBEConfig config =
        new SimpleStringPBEConfig() {
          {
            this.setPassword(password);
            // 加密算法
            this.setAlgorithm("PBEWithMD5AndDES");
            this.setKeyObtentionIterations("1000");
            this.setPoolSize("1");
            this.setProviderName("SunJCE");
            this.setSaltGeneratorClassName("org.jasypt.salt.RandomSaltGenerator");
            this.setStringOutputType("base64");
          }
        };
    final PooledPBEStringEncryptor encryptor = new PooledPBEStringEncryptor();
    encryptor.setConfig(config);

//    log.info("decrypt="+encryptor.decrypt("zn4HSOc+m0ZLHUygmePkcg=="));
//    String username = encryptor.encrypt("root");
//    log.info("username="+username);
//    String new_password = encryptor.encrypt("12345678");
//    log.info("new_password="+new_password);
//
//    log.info("decrypt_username="+encryptor.decrypt("Hbd5sJc6cCXWZ3RYT0doDA=="));
//    log.info("decrypt+password="+encryptor.decrypt("n2agYGCFWt9c9bfGz/a1haUG5KALIjKg"));

    return encryptor;
  }
}
