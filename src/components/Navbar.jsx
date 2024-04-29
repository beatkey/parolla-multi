import {GlobalOutlined, UserOutlined} from "@ant-design/icons";

export default function Navbar() {
    return <div className="grid grid-cols-[50px_auto_50px] justify-between items-center py-2 bg-white border-b-1 border-[#ededed]">
        <div></div>
        <div className="text-[#504545] tracking-[.08em] font-extrabold text-3xl">
            parolla
        </div>
        <div className="cursor-pointer">
            <UserOutlined className="text-3xl" />
        </div>
    </div>
}