import React, { useEffect, useState } from "react";
import { UserOutlined } from "@ant-design/icons";
import { Avatar, Badge, Space } from "antd";
import { AiFillCloseCircle } from "react-icons/ai";
import useEvents from "../../hooks/useEvents";

const Avatars = () => {
  const [avatars, setAvatars] = useState([]);
  const { events, setEvents } = useEvents();

  useEffect(() => {
    // Fetch user details
    fetch(
      "https://eventmanagement-backend-production.up.railway.app/api/v1/user"
    )
      .then((res) => res.json())
      .then((data) => {
        setAvatars(data);
      })
      .catch((err) => {
        alert(err);
        return;
      });
  }, []);

  const handleSelect = (avatarId) => {
    setEvents((prev) => {
      // Initialize userIds array if not already an array
      const userIds = prev.userIds || [];

      // Check if the avatarId is already in the userIds array
      const isSelected = userIds.includes(avatarId);

      // If selected, remove it, otherwise add it
      const newUserIds = isSelected
        ? userIds.filter((id) => id !== avatarId)
        : [...userIds, avatarId];

      return {
        ...prev,
        userIds: newUserIds,
      };
    });
  };

  return (
    <div>
      <Space size={"middle"}>
        <Avatar.Group
          size="large"
          max={{
            count: 7,
            style: {
              color: "#f56a00",
              backgroundColor: "#fde3cf",
              cursor: "pointer",
            },
            popover: {
              trigger: "click",
            },
          }}
        >
          {Array.isArray(avatars) &&
            avatars.map((avatar) => (
              <div
                key={avatar.id}
                style={{ marginRight: "10px" }}
                title={avatar.name}
                onClick={() => handleSelect(avatar.id)}
              >
                <Badge size="large" count={<AiFillCloseCircle />}>
                  <Avatar
                    size={"large"}
                    src={avatar.avatarUrl}
                    icon={<UserOutlined />}
                  />
                </Badge>
              </div>
            ))}
        </Avatar.Group>
      </Space>
    </div>
  );
};

export default Avatars;
