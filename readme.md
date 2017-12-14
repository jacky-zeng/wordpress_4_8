# Wordpress

[![Donate][ico-donate]][link-donate]

第一个版本用的wordpress-4.8-zh_CN

### database change  (数据库修改记录)

```
   //记录访问次数
   alter table wp_posts add column visit_times int(11) unsigned not null default 0 AFTER comment_count;
   
   //记录访问者信息
   CREATE TABLE `wp_visitors` (
     `ID` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
     `post_id` int(11) NOT NULL DEFAULT '0' COMMENT '文章id',
     `client_ip` varchar(20) COLLATE utf8mb4_unicode_520_ci NOT NULL DEFAULT '' COMMENT '访问者ip',
     `serverTime` datetime DEFAULT NULL,
     `serverYear` int(11) NOT NULL DEFAULT '0',
     `serverMonth` int(11) NOT NULL DEFAULT '0',
     `serverDay` int(11) NOT NULL DEFAULT '0',
     PRIMARY KEY (`ID`),
     KEY `post_id_index` (`post_id`)
   ) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_520_ci;
   
```

## Related
    url:  https://www.zengyanqi.com

## Support

If you want get more infomation, please email 1017798347@qq.com
