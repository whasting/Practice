def my_perms(arr)
  if !arr.kind_of?(Array)
    raise "#Input {arr} is type #{arr.class}, input must be an Array!"

  elsif arr.length < 2
    return arr

  elsif arr.length == 2
    return [arr, [arr.last, arr.first]]

  else
    perms = []

    arr.each_index do |idx1|
      sub_array = []
      selected_element = arr[idx1]

      arr.each_with_index do |el, idx2|
        sub_array << el if idx1 != idx2
      end

      sub_perms = my_perms(sub_array)

      sub_perms.each do |perm|
        perm << selected_element
        perms << perm
      end

    end

  end
  perms

end
