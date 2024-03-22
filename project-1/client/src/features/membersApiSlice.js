import apiSlice from "../app/apiSlice";

const membersApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getMembers: builder.query({
            query: () => 'Members',
            providesTags: ['Members'],
        }),
        getMember: builder.query({
            query: (id) => ({
                url: `Members/${id}`,
                method: 'GET',
            }),
            providesTags: ['Members'],

        }),
        addMember: builder.mutation({
            query: (member) => ({
                url: 'Members',
                method: 'POST',
                body: member,
            }),
        }),
        updateMember: builder.mutation({
            query: ({ id, member }) => ({
                url: `Members/${id}`,
                method: 'PUT',
                body: member,
            }),
            invalidatesTags: ['Members'],
        }),
        deleteMember: builder.mutation({
            query: (id) => ({
                url: `Members/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Members'],
        }),
    }),
});

export const {
    useGetMembersQuery,
    useGetMemberQuery,
    useAddMemberMutation,
    useUpdateMemberMutation,
    useDeleteMemberMutation,
} = membersApiSlice;