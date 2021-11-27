import React from 'react'
import { DeleteOutlined, DownloadOutlined } from "@ant-design/icons";
import { Button, Popconfirm, Space, Table } from "antd";
import { dowloadFile } from "utils/downloadFile";
import { ITableMediaFiles } from "./typesTableMediaFiles";
import videoService from 'api/video-service/video.service';

const TableMediaFiles = ({ mediaFiles, getFiles }: ITableMediaFiles) => {
  const dataSource = mediaFiles.map((fileName, index) => ({
    key: index,
    fileName,
  }));

  const onDownloadItem = (fileName: string) => () => {
    videoService.downloadMediaFile({ fileName }).then((blob) => {
      dowloadFile(blob, fileName);
    });
  };

  const onDeleteMediaFile = (fileName: string) => () => {
    return videoService.deleteMediaFile({ fileName }).then(() => {
      getFiles();
    });
  };

  const columns = [
    {
      title: "Файл",
      render: (_: any, record: { fileName: string }) => record.fileName,
    },
    {
      title: "",
      width: 100,
      render: (_: any, record: { fileName: string }) => (
        <Space>
          <Button
            onClick={onDownloadItem(record.fileName)}
            type="text"
            shape="circle"
          >
            <DownloadOutlined style={{ fontSize: 18 }} />
          </Button>
          <Popconfirm
            title="Ви впевнені що хочете видалити файл?"
            onConfirm={onDeleteMediaFile(record.fileName)}
          >
            <Button type="text" danger shape="circle">
              <DeleteOutlined style={{ fontSize: 18 }} />
            </Button>
          </Popconfirm>
        </Space>
      ),
    },
  ];

  return <Table columns={columns} dataSource={dataSource} />;
};

export default TableMediaFiles;
