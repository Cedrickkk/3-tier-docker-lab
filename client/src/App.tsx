import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";
import axios from "axios";
import "./App.css";

const queryClient = new QueryClient();

function CurrentTime({ api }: { api: string }) {
  const { isLoading, error, data, isFetching } = useQuery({
    queryKey: [api],
    queryFn: () => axios.get(`${api}`).then((res) => res.data),
  });

  if (isLoading) return `Loading ${api}... `;

  if (error) return "An error has occurred: " + error.message;

  return (
    <div className="App">
      <p>---</p>
      <p>API: {data.api}</p>
      <p>Time from DB: {data.now}</p>
      <div>{isFetching ? "Updating..." : ""}</div>
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <h1>Hey 👋</h1>
      <CurrentTime api="http://localhost:8081/api/v1/java" />
      <CurrentTime api="http://localhost:3000/api/v1/node" />
    </QueryClientProvider>
  );
}

export default App;
