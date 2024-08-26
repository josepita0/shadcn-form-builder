// vite.config.ts
import { defineConfig } from "file:///C:/projects/packages/components/shadcn-form-builder/node_modules/.pnpm/vite@5.4.2_@types+node@22.5.0/node_modules/vite/dist/node/index.js";
import react from "file:///C:/projects/packages/components/shadcn-form-builder/node_modules/.pnpm/@vitejs+plugin-react-swc@3.7.0_vite@5.4.2_@types+node@22.5.0_/node_modules/@vitejs/plugin-react-swc/index.mjs";
import path from "path";
import dts from "file:///C:/projects/packages/components/shadcn-form-builder/node_modules/.pnpm/vite-plugin-dts@4.0.3_@types+node@22.5.0_rollup@4.21.0_typescript@5.5.4_vite@5.4.2_@types+node@22.5.0_/node_modules/vite-plugin-dts/dist/index.mjs";
var __vite_injected_original_dirname = "C:\\projects\\packages\\components\\shadcn-form-builder";
var vite_config_default = defineConfig({
  build: {
    lib: {
      entry: {
        index: path.resolve(__vite_injected_original_dirname, "index.ts"),
        components: path.resolve(__vite_injected_original_dirname, "./src/components/index.ts"),
        hooks: path.resolve(__vite_injected_original_dirname, "./src/lib/hooks/index.ts")
      },
      name: "form-builder-react-shadcn",
      fileName: (format) => `index.${format}.js`
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM"
        }
      }
    },
    sourcemap: true,
    emptyOutDir: true
  },
  plugins: [react(), dts()]
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxwcm9qZWN0c1xcXFxwYWNrYWdlc1xcXFxjb21wb25lbnRzXFxcXHNoYWRjbi1mb3JtLWJ1aWxkZXJcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkM6XFxcXHByb2plY3RzXFxcXHBhY2thZ2VzXFxcXGNvbXBvbmVudHNcXFxcc2hhZGNuLWZvcm0tYnVpbGRlclxcXFx2aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vQzovcHJvamVjdHMvcGFja2FnZXMvY29tcG9uZW50cy9zaGFkY24tZm9ybS1idWlsZGVyL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSBcInZpdGVcIjtcbmltcG9ydCByZWFjdCBmcm9tIFwiQHZpdGVqcy9wbHVnaW4tcmVhY3Qtc3djXCI7XG5pbXBvcnQgcGF0aCBmcm9tIFwicGF0aFwiO1xuaW1wb3J0IGR0cyBmcm9tIFwidml0ZS1wbHVnaW4tZHRzXCI7XG5cbi8vIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICBidWlsZDoge1xuICAgIGxpYjoge1xuICAgICAgZW50cnk6IHtcbiAgICAgICAgaW5kZXg6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsIFwiaW5kZXgudHNcIiksXG4gICAgICAgIGNvbXBvbmVudHM6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsIFwiLi9zcmMvY29tcG9uZW50cy9pbmRleC50c1wiKSxcbiAgICAgICAgaG9va3M6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsIFwiLi9zcmMvbGliL2hvb2tzL2luZGV4LnRzXCIpLFxuICAgICAgfSxcbiAgICAgIG5hbWU6IFwiZm9ybS1idWlsZGVyLXJlYWN0LXNoYWRjblwiLFxuICAgICAgZmlsZU5hbWU6IChmb3JtYXQpID0+IGBpbmRleC4ke2Zvcm1hdH0uanNgLFxuICAgIH0sXG4gICAgcm9sbHVwT3B0aW9uczoge1xuICAgICAgZXh0ZXJuYWw6IFtcInJlYWN0XCIsIFwicmVhY3QtZG9tXCJdLFxuICAgICAgb3V0cHV0OiB7XG4gICAgICAgIGdsb2JhbHM6IHtcbiAgICAgICAgICByZWFjdDogXCJSZWFjdFwiLFxuICAgICAgICAgIFwicmVhY3QtZG9tXCI6IFwiUmVhY3RET01cIixcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBzb3VyY2VtYXA6IHRydWUsXG4gICAgZW1wdHlPdXREaXI6IHRydWUsXG4gIH0sXG4gIHBsdWdpbnM6IFtyZWFjdCgpLCBkdHMoKV0sXG59KTtcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBcVYsU0FBUyxvQkFBb0I7QUFDbFgsT0FBTyxXQUFXO0FBQ2xCLE9BQU8sVUFBVTtBQUNqQixPQUFPLFNBQVM7QUFIaEIsSUFBTSxtQ0FBbUM7QUFNekMsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsT0FBTztBQUFBLElBQ0wsS0FBSztBQUFBLE1BQ0gsT0FBTztBQUFBLFFBQ0wsT0FBTyxLQUFLLFFBQVEsa0NBQVcsVUFBVTtBQUFBLFFBQ3pDLFlBQVksS0FBSyxRQUFRLGtDQUFXLDJCQUEyQjtBQUFBLFFBQy9ELE9BQU8sS0FBSyxRQUFRLGtDQUFXLDBCQUEwQjtBQUFBLE1BQzNEO0FBQUEsTUFDQSxNQUFNO0FBQUEsTUFDTixVQUFVLENBQUMsV0FBVyxTQUFTLE1BQU07QUFBQSxJQUN2QztBQUFBLElBQ0EsZUFBZTtBQUFBLE1BQ2IsVUFBVSxDQUFDLFNBQVMsV0FBVztBQUFBLE1BQy9CLFFBQVE7QUFBQSxRQUNOLFNBQVM7QUFBQSxVQUNQLE9BQU87QUFBQSxVQUNQLGFBQWE7QUFBQSxRQUNmO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxJQUNBLFdBQVc7QUFBQSxJQUNYLGFBQWE7QUFBQSxFQUNmO0FBQUEsRUFDQSxTQUFTLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztBQUMxQixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
