import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { FaSackDollar, FaUsers } from "react-icons/fa6";
import { RiRestaurant2Fill } from "react-icons/ri";
import { TbTruckDelivery } from "react-icons/tb";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, PieChart, Pie, Legend } from 'recharts';

const AdminHome = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();

    const { data: stats } = useQuery({
        queryKey: ['admin-stats'],
        queryFn: async () => {
            const res = await axiosSecure.get('/admin-stats');
            return res.data;
        }
    });
    const { data: chartData } = useQuery({
        queryKey: ['order-stats'],
        queryFn: async () => {
            const res = await axiosSecure.get('/order-stats')
            return res.data
        }
    })

    // custom shape for the bar chart
    const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];

    const getPath = (x, y, width, height) => {
        return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
        ${x + width / 2}, ${y}
        C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
        Z`;
    };

    const TriangleBar = (props) => {
        const { fill, x, y, width, height } = props;

        return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
    };

    // pie chart with customized label
    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (
            <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
                {`${(percent * 100).toFixed(0)}%`}
            </text>
        );
    };

    const pieChartData = chartData?.map(data => {
        return {name: data.category, value: data.revenue}
    })


    return (
        <div className="px-11 pt-14">
            <h2 className="text-4xl uppercase font-semibold">Hi, Welcome back! {user?.displayName}</h2>
            <div className="stats shadow">

                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <FaSackDollar className="text-5xl"></FaSackDollar>
                    </div>
                    <div className="stat-title text-xl font-semibold">Revenue</div>
                    <div className="stat-value">${stats?.revenue.toFixed(2)}</div>
                    <div className="stat-desc">Jan 1st - Feb 1st</div>
                </div>

                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <FaUsers className="text-5xl"></FaUsers>
                    </div>
                    <div className="stat-title text-xl font-semibold">Users</div>
                    <div className="stat-value">{stats?.users}</div>
                    <div className="stat-desc">↗︎ 400 (22%)</div>
                </div>

                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <RiRestaurant2Fill className="text-5xl"></RiRestaurant2Fill>
                    </div>
                    <div className="stat-title text-xl font-semibold">Products</div>
                    <div className="stat-value">{stats?.menuItems}</div>
                    <div className="stat-desc">↘︎ 90 (14%)</div>
                </div>

                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <TbTruckDelivery className="text-5xl"></TbTruckDelivery>
                    </div>
                    <div className="stat-title text-xl font-semibold">Orders</div>
                    <div className="stat-value">{stats?.orders}</div>
                    <div className="stat-desc">↘︎ 90 (14%)</div>
                </div>

            </div>

            <div className="flex">
                <div className="w-1/2">
                    <BarChart
                        width={500}
                        height={300}
                        data={chartData}
                        margin={{
                            top: 20,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="category" />
                        <YAxis />
                        <Bar dataKey="quantity" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
                            {chartData?.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={colors[index % 20]} />
                            ))}
                        </Bar>
                    </BarChart>
                </div>
                <div className="w-1/2">
                    <PieChart width={400} height={400}>
                        <Pie
                            data={pieChartData}
                            cx="50%"
                            cy="50%"
                            labelLine={false}
                            label={renderCustomizedLabel}
                            outerRadius={80}
                            fill="#8884d8"
                            dataKey="value"
                        >
                            {pieChartData?.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                        <Legend></Legend>
                    </PieChart>
                </div>
            </div>
        </div>
    );
};

export default AdminHome;