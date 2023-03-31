#!/bin/bash
for i in $(find /Users/ngzhongqin/IdeaProjects/AutoMeter-API/testcenterservice/src/test/resources/sql/dev/*.sql) ; do
  /usr/local/MySQL/bin/mysql -u root -p12345678 testcenter < ${i};
done

