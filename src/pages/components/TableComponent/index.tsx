import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { useEffect, useState } from "react";
import { Box, Table, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";

interface TableComponentProps<TData> {
  dataInfo: TData[];
  columns: ColumnDef<TData, any>[];
}

export function TableComponent<TData extends object>({
  dataInfo,
  columns,
}: TableComponentProps<TData>) {
  const [data, setData] = useState<TData[]>([]);

  useEffect(() => {
    if (dataInfo) setData([...dataInfo]);
  }, [dataInfo]);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <Box w="100%" mt={"2rem"}>
      <Table w="100%" variant="striped" colorScheme="gray">
        <Thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <Tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <Th key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </Th>
              ))}
            </Tr>
          ))}
        </Thead>
        <Tbody>
          {table.getRowModel().rows.map((row) => (
            <Tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <Td key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </Td>
              ))}
            </Tr>
          ))}
        </Tbody>
        {/* <tfoot> */}
        {/*  {table.getFooterGroups().map((footerGroup) => ( */}
        {/*    <tr key={footerGroup.id}> */}
        {/*      {footerGroup.headers.map((header) => ( */}
        {/*        <th key={header.id}> */}
        {/*          {header.isPlaceholder */}
        {/*            ? null */}
        {/*            : flexRender( */}
        {/*                header.column.columnDef.footer, */}
        {/*                header.getContext() */}
        {/*              )} */}
        {/*        </th> */}
        {/*      ))} */}
        {/*    </tr> */}
        {/*  ))} */}
        {/* </tfoot> */}
      </Table>
    </Box>
  );
}
