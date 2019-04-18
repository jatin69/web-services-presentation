import { dataSources } from '../../datasources';
import { pubsub } from '../pubsub';

const AUTHOR_MUTATED = 'authorMutated';

export default {
    Query: {
        authors() {
            return dataSources.bookService.getAuthors();
        },

        author(parent, args) {
            return dataSources.bookService.getAuthor(args.id);
        }
    },

    Mutation: {
        createAuthor(parent, args) {
            return dataSources.bookService
                .createAuthor({
                    name: args.name
                })
                .then(author => {
                    pubsub.publish(AUTHOR_MUTATED, {
                        authorMutated: {
                            mutation: 'CREATED',
                            node: author
                        }
                    });
                    return author;
                });
        },
        // parent, args, context, info
        updateAuthor(parent, args) {
            return dataSources.bookService
                .updateAuthor(args.authorId, {
                    name: args.name
                })
                .then(author => {
                    pubsub.publish(AUTHOR_MUTATED, {
                        authorMutated: {
                            mutation: 'UPDATED',
                            node: author
                        }
                    });
                    return author;
                });
        }
    },

    Subscription: {
        authorMutated: {
            subscribe: () => pubsub.asyncIterator(AUTHOR_MUTATED)
        }
    },

    // resolving everything
    Author: {
        id(parent, args) {
            return parent.id;
        },
        name(parent, args) {
            return parent.name;
        },
        books(parent) {
            return dataSources.bookService.getAuthorBooks(parent.id);
        }
    }
};
