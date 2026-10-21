const PARTS_AMOUNT = 4;
const OUTPUT_PARTS_3 = 3;
const PART_SIZE_3 = 3;

export const useDecodeEmail = (lidfromUrl: string) => {
  const splitData = (data: string): [string, string, string, string] => {
    const partSize = Math.floor(data.length / PARTS_AMOUNT);

    const part1 = data.substring(0, partSize);
    const part2 = data.substring(partSize, partSize * 2);
    const part3 = data.substring(partSize * 2, partSize * PART_SIZE_3);
    const part4 = data.substring(partSize * PART_SIZE_3, data.length);

    return [part1, part2, part3, part4];
  };

  const decodeEmail = (lid: string): string => {
    const data = Buffer.from(lid, 'base64').toString('utf8');
    const parts = splitData(data);

    const output = parts[1] + parts[2] + parts[0] + parts[OUTPUT_PARTS_3];
    const res = Buffer.from(output, 'base64').toString('utf8');

    return res;
  };

  return decodeEmail(lidfromUrl);
};
