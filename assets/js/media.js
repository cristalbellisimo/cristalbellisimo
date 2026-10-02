(function () {
  function youtubeId(src) {
    let url;
    try {
      url = new URL(src);
    } catch {
      return "";
    }

    const host = url.hostname.toLowerCase().replace(/^www\./, "");
    let id = "";
    if (host === "youtu.be") {
      id = url.pathname.split("/").filter(Boolean)[0] || "";
    } else if (["youtube.com", "m.youtube.com", "youtube-nocookie.com"].includes(host)) {
      id = url.searchParams.get("v") || "";
      if (!id) {
        id = url.pathname.match(/^\/(?:embed|shorts|live|v)\/([^/?]+)/)?.[1] || "";
      }
    }

    return /^[A-Za-z0-9_-]{11}$/.test(id) ? id : "";
  }

  function escapeHTML(value) {
    return String(value || "Vídeo do YouTube").replace(/[&<>"']/g, character => ({
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    })[character]);
  }

  function youtubeFrame(src, title) {
    const id = youtubeId(src);
    if (!id) return "";
    return `<iframe class="youtube-frame" src="https://www.youtube-nocookie.com/embed/${id}?rel=0" title="${escapeHTML(title)}" loading="lazy" referrerpolicy="strict-origin-when-cross-origin" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
  }

  function isVideo(src) {
    return !!youtubeId(src) || /\.(mp4|webm|mov|m4v|ogg)$/i.test(src || "");
  }

  window.CBMedia = {
    youtubeId,
    youtubeFrame,
    youtubeThumbnail(src) {
      const id = youtubeId(src);
      return id ? `https://i.ytimg.com/vi/${id}/hqdefault.jpg` : "";
    },
    isYouTube(src) {
      return !!youtubeId(src);
    },
    isVideo
  };
})();
