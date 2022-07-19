package block

import "testing"

func TestIsSiteBlocked(t *testing.T) {
	type args struct {
		site Website
	}
	tests := []struct {
		name string
		args args
		want bool
	}{
		{
			name: "test blocked",
			args: args{
				site: Website{
					URL: "https://google.com",
					Description: "Search engine karya bangsa asing.",
				},
			},
			want: true,
		},
		{
			name: "test no blocked",
			args: args{
				site: Website{
					URL: "https://peduli.com",
					Description: "Search engine karya anak bangsa.",
				},
			},
			want: false,
		},
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			if got := IsSiteBlocked(tt.args.site); got != tt.want {
				t.Errorf("IsSiteBlocked() = %v, want %v", got, tt.want)
			}
		})
	}
}
