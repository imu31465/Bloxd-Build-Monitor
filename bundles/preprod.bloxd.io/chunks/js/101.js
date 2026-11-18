/*! For license information please see 7jvyee.101.08f55f1d.chunk.js.LICENSE.txt */
export const id = 101;
export const ids = [101];
export const modules = {
  5690: (yb, bb, Wy) => {
    Wy.r(bb), Wy.d(bb, {
      Graph: () => Ly,
      debug: () => MW,
      default: () => XW,
      graphlib: () => fy,
      layout: () => qU,
      util: () => YW,
      version: () => fb
    });
    var Uy = Object.defineProperty,
      hy = (yb, bb, Wy) => ((yb, bb, Wy) => bb in yb ? Uy(yb, bb, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: Wy
      }) : yb[bb] = Wy)(yb, "symbol" != typeof bb ? bb + "" : bb, Wy),
      fy = {};
    ((yb, bb) => {
      for (var Wy in bb) Uy(yb, Wy, {
        get: bb[Wy],
        enumerable: !0
      })
    })(fy, {
      Graph: () => Ly,
      alg: () => ly
    });
    var Zy = Object.defineProperty,
      cb = (yb, bb) => {
        for (var Wy in bb) Zy(yb, Wy, {
          get: bb[Wy],
          enumerable: !0
        })
      },
      Py = class {
        constructor(yb) {
          this._isDirected = !0, this._isMultigraph = !1, this._isCompound = !1, this._nodes = {}, this._in = {}, this._preds = {}, this._out = {}, this._sucs = {}, this._edgeObjs = {}, this._edgeLabels = {}, this._nodeCount = 0, this._edgeCount = 0, this._defaultNodeLabelFn = () => {}, this._defaultEdgeLabelFn = () => {}, yb && (this._isDirected = !("directed" in yb) || yb.directed, this._isMultigraph = "multigraph" in yb && yb.multigraph, this._isCompound = "compound" in yb && yb.compound), this._isCompound && (this._parent = {}, this._children = {}, this._children["\0"] = {})
        }
        isDirected() {
          return this._isDirected
        }
        isMultigraph() {
          return this._isMultigraph
        }
        isCompound() {
          return this._isCompound
        }
        setGraph(yb) {
          return this._label = yb, this
        }
        graph() {
          return this._label
        }
        setDefaultNodeLabel(yb) {
          return this._defaultNodeLabelFn = "function" != typeof yb ? () => yb : yb, this
        }
        nodeCount() {
          return this._nodeCount
        }
        nodes() {
          return Object.keys(this._nodes)
        }
        sources() {
          return this.nodes().filter((yb => 0 === Object.keys(this._in[yb]).length))
        }
        sinks() {
          return this.nodes().filter((yb => 0 === Object.keys(this._out[yb]).length))
        }
        setNodes(yb, bb) {
          return yb.forEach((yb => {
            void 0 !== bb ? this.setNode(yb, bb) : this.setNode(yb)
          })), this
        }
        setNode(yb, bb) {
          return yb in this._nodes ? (arguments.length > 1 && (this._nodes[yb] = bb), this) : (this._nodes[yb] = arguments.length > 1 ? bb : this._defaultNodeLabelFn(yb), this._isCompound && (this._parent[yb] = "\0", this._children[yb] = {}, this._children["\0"][yb] = !0), this._in[yb] = {}, this._preds[yb] = {}, this._out[yb] = {}, this._sucs[yb] = {}, ++this._nodeCount, this)
        }
        node(yb) {
          return this._nodes[yb]
        }
        hasNode(yb) {
          return yb in this._nodes
        }
        removeNode(yb) {
          if (yb in this._nodes) {
            let bb = yb => this.removeEdge(this._edgeObjs[yb]);
            delete this._nodes[yb], this._isCompound && (this._removeFromParentsChildList(yb), delete this._parent[yb], this.children(yb).forEach((yb => {
              this.setParent(yb)
            })), delete this._children[yb]), Object.keys(this._in[yb]).forEach(bb), delete this._in[yb], delete this._preds[yb], Object.keys(this._out[yb]).forEach(bb), delete this._out[yb], delete this._sucs[yb], --this._nodeCount
          }
          return this
        }
        setParent(yb, bb) {
          if (!this._isCompound) throw new Error("Cannot set parent in a non-compound graph");
          if (void 0 === bb) bb = "\0";
          else {
            for (let Wy = bb += ""; void 0 !== Wy; Wy = this.parent(Wy))
              if (Wy === yb) throw new Error("Setting " + bb + " as parent of " + yb + " would create a cycle");
            this.setNode(bb)
          }
          return this.setNode(yb), this._removeFromParentsChildList(yb), this._parent[yb] = bb, this._children[bb][yb] = !0, this
        }
        parent(yb) {
          if (this._isCompound) {
            let bb = this._parent[yb];
            if ("\0" !== bb) return bb
          }
        }
        children() {
          let yb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "\0";
          if (this._isCompound) {
            let bb = this._children[yb];
            if (bb) return Object.keys(bb)
          } else {
            if ("\0" === yb) return this.nodes();
            if (this.hasNode(yb)) return []
          }
          return []
        }
        predecessors(yb) {
          let bb = this._preds[yb];
          if (bb) return Object.keys(bb)
        }
        successors(yb) {
          let bb = this._sucs[yb];
          if (bb) return Object.keys(bb)
        }
        neighbors(yb) {
          let bb = this.predecessors(yb);
          if (bb) {
            let Wy = new Set(bb),
              Uy = this.successors(yb);
            if (Uy)
              for (let yb of Uy) Wy.add(yb);
            return Array.from(Wy.values())
          }
        }
        isLeaf(yb) {
          var bb;
          let Wy;
          return Wy = this.isDirected() ? this.successors(yb) : this.neighbors(yb), 0 === (null != (bb = null == Wy ? void 0 : Wy.length) ? bb : 0)
        }
        filterNodes(yb) {
          let bb = new this.constructor({
            directed: this._isDirected,
            multigraph: this._isMultigraph,
            compound: this._isCompound
          });
          bb.setGraph(this.graph()), Object.entries(this._nodes).forEach((Wy => {
            let [Uy, hy] = Wy;
            yb(Uy) && bb.setNode(Uy, hy)
          })), Object.values(this._edgeObjs).forEach((yb => {
            bb.hasNode(yb.v) && bb.hasNode(yb.w) && bb.setEdge(yb, this.edge(yb))
          }));
          let Wy = {},
            Uy = yb => {
              let hy = this.parent(yb);
              return !hy || bb.hasNode(hy) ? (Wy[yb] = hy, hy) : hy in Wy ? Wy[hy] : Uy(hy)
            };
          return this._isCompound && bb.nodes().forEach((yb => bb.setParent(yb, Uy(yb)))), bb
        }
        setDefaultEdgeLabel(yb) {
          return this._defaultEdgeLabelFn = "function" != typeof yb ? () => yb : yb, this
        }
        edgeCount() {
          return this._edgeCount
        }
        edges() {
          return Object.values(this._edgeObjs)
        }
        setPath(yb, bb) {
          return yb.reduce(((yb, Wy) => (void 0 !== bb ? this.setEdge(yb, Wy, bb) : this.setEdge(yb, Wy), Wy))), this
        }
        setEdge(yb, bb, Wy, Uy) {
          let hy, fy, Zy, cb, Py = !1;
          "object" == typeof yb && null !== yb && "v" in yb ? (hy = yb.v, fy = yb.w, Zy = yb.name, 2 === arguments.length && (cb = bb, Py = !0)) : (hy = yb, fy = bb, Zy = Uy, arguments.length > 2 && (cb = Wy, Py = !0)), hy = "" + hy, fy = "" + fy, void 0 !== Zy && (Zy = "" + Zy);
          let By = Ky(this._isDirected, hy, fy, Zy);
          if (By in this._edgeLabels) return Py && (this._edgeLabels[By] = cb), this;
          if (void 0 !== Zy && !this._isMultigraph) throw new Error("Cannot set a named edge when isMultigraph = false");
          this.setNode(hy), this.setNode(fy), this._edgeLabels[By] = Py ? cb : this._defaultEdgeLabelFn(hy, fy, Zy);
          let ey = function(yb, bb, Wy, Uy) {
            let hy = "" + bb,
              fy = "" + Wy;
            if (!yb && hy > fy) {
              let yb = hy;
              hy = fy, fy = yb
            }
            let Zy = {
              v: hy,
              w: fy
            };
            return Uy && (Zy.name = Uy), Zy
          }(this._isDirected, hy, fy, Zy);
          return hy = ey.v, fy = ey.w, Object.freeze(ey), this._edgeObjs[By] = ey, oy(this._preds[fy], hy), oy(this._sucs[hy], fy), this._in[fy][By] = ey, this._out[hy][By] = ey, this._edgeCount++, this
        }
        edge(yb, bb, Wy) {
          let Uy = 1 === arguments.length ? ey(this._isDirected, yb) : Ky(this._isDirected, yb, bb, Wy);
          return this._edgeLabels[Uy]
        }
        edgeAsObj(yb, bb, Wy) {
          let Uy = 1 === arguments.length ? this.edge(yb) : this.edge(yb, bb, Wy);
          return "object" != typeof Uy || null === Uy ? {
            label: Uy
          } : Uy
        }
        hasEdge(yb, bb, Wy) {
          return (1 === arguments.length ? ey(this._isDirected, yb) : Ky(this._isDirected, yb, bb, Wy)) in this._edgeLabels
        }
        removeEdge(yb, bb, Wy) {
          let Uy = 1 === arguments.length ? ey(this._isDirected, yb) : Ky(this._isDirected, yb, bb, Wy),
            hy = this._edgeObjs[Uy];
          if (hy) {
            let yb = hy.v,
              bb = hy.w;
            delete this._edgeLabels[Uy], delete this._edgeObjs[Uy], By(this._preds[bb], yb), By(this._sucs[yb], bb), delete this._in[bb][Uy], delete this._out[yb][Uy], this._edgeCount--
          }
          return this
        }
        inEdges(yb, bb) {
          return this.isDirected() ? this.filterEdges(this._in[yb], yb, bb) : this.nodeEdges(yb, bb)
        }
        outEdges(yb, bb) {
          return this.isDirected() ? this.filterEdges(this._out[yb], yb, bb) : this.nodeEdges(yb, bb)
        }
        nodeEdges(yb, bb) {
          if (yb in this._nodes) return this.filterEdges({
            ...this._in[yb],
            ...this._out[yb]
          }, yb, bb)
        }
        _removeFromParentsChildList(yb) {
          delete this._children[this._parent[yb]][yb]
        }
        filterEdges(yb, bb, Wy) {
          if (!yb) return;
          let Uy = Object.values(yb);
          return Wy ? Uy.filter((yb => yb.v === bb && yb.w === Wy || yb.v === Wy && yb.w === bb)) : Uy
        }
      };

    function oy(yb, bb) {
      yb[bb] ? yb[bb]++ : yb[bb] = 1
    }

    function By(yb, bb) {
      void 0 !== yb[bb] && !--yb[bb] && delete yb[bb]
    }

    function Ky(yb, bb, Wy, Uy) {
      let hy = "" + bb,
        fy = "" + Wy;
      if (!yb && hy > fy) {
        let yb = hy;
        hy = fy, fy = yb
      }
      return hy + "\x01" + fy + "\x01" + (void 0 === Uy ? "\0" : Uy)
    }

    function ey(yb, bb) {
      return Ky(yb, bb.v, bb.w, bb.name)
    }

    function qb(yb) {
      let bb = {
          options: {
            directed: yb.isDirected(),
            multigraph: yb.isMultigraph(),
            compound: yb.isCompound()
          },
          nodes: sy(yb),
          edges: Sy(yb)
        },
        Wy = yb.graph();
      return void 0 !== Wy && (bb.value = structuredClone(Wy)), bb
    }

    function sy(yb) {
      return yb.nodes().map((bb => {
        let Wy = yb.node(bb),
          Uy = yb.parent(bb),
          hy = {
            v: bb
          };
        return void 0 !== Wy && (hy.value = Wy), void 0 !== Uy && (hy.parent = Uy), hy
      }))
    }

    function Sy(yb) {
      return yb.edges().map((bb => {
        let Wy = yb.edge(bb),
          Uy = {
            v: bb.v,
            w: bb.w
          };
        return void 0 !== bb.name && (Uy.name = bb.name), void 0 !== Wy && (Uy.value = Wy), Uy
      }))
    }

    function Ey(yb) {
      let bb = new Py(yb.options);
      return void 0 !== yb.value && bb.setGraph(yb.value), yb.nodes.forEach((yb => {
        bb.setNode(yb.v, yb.value), yb.parent && bb.setParent(yb.v, yb.parent)
      })), yb.edges.forEach((yb => {
        bb.setEdge({
          v: yb.v,
          w: yb.w,
          name: yb.name
        }, yb.value)
      })), bb
    }
    cb({}, {
      read: () => Ey,
      write: () => qb
    });
    var ly = {};
    cb(ly, {
      CycleException: () => My,
      bellmanFord: () => Cy,
      components: () => Ty,
      dijkstra: () => gb,
      dijkstraAll: () => Gy,
      findCycles: () => Ry,
      floydWarshall: () => ib,
      isAcyclic: () => Xy,
      postorder: () => Hy,
      preorder: () => ab,
      prim: () => Fy,
      shortestPaths: () => py,
      tarjan: () => Oy,
      topsort: () => Yy
    });
    var mb = () => 1;

    function Cy(yb, bb, Wy, Uy) {
      return function(yb, bb, Wy, Uy) {
        let hy, fy = {},
          Zy = 0,
          cb = yb.nodes(),
          Py = function(yb) {
            let bb = fy[yb.v],
              Uy = fy[yb.w];
            if (!bb || !Uy) return;
            let Zy = Wy(yb);
            bb.distance + Zy < Uy.distance && (fy[yb.w] = {
              distance: bb.distance + Zy,
              predecessor: yb.v
            }, hy = !0)
          },
          oy = function() {
            cb.forEach((function(yb) {
              Uy(yb).forEach((function(bb) {
                let Wy = bb.v === yb ? bb.v : bb.w,
                  Uy = Wy === bb.v ? bb.w : bb.v;
                Py({
                  v: Wy,
                  w: Uy
                })
              }))
            }))
          };
        cb.forEach((function(yb) {
          let Wy = yb === bb ? 0 : Number.POSITIVE_INFINITY;
          fy[yb] = {
            distance: Wy,
            predecessor: ""
          }
        }));
        let By = cb.length;
        for (let Ky = 1; Ky < By && (hy = !1, Zy++, oy(), hy); Ky++);
        if (Zy === By - 1 && (hy = !1, oy(), hy)) throw new Error("The graph contains a negative weight cycle");
        return fy
      }(yb, String(bb), Wy || mb, Uy || function(bb) {
        var Wy;
        return null != (Wy = yb.outEdges(bb)) ? Wy : []
      })
    }

    function Ty(yb) {
      let bb, Wy = {},
        Uy = [];

      function hy(Uy) {
        var fy, Zy;
        Uy in Wy || (Wy[Uy] = !0, bb.push(Uy), null == (fy = yb.successors(Uy)) || fy.forEach(hy), null == (Zy = yb.predecessors(Uy)) || Zy.forEach(hy))
      }
      return yb.nodes().forEach((function(yb) {
        bb = [], hy(yb), bb.length && Uy.push(bb)
      })), Uy
    }
    var Vy = class {
        constructor() {
          this._arr = [], this._keyIndices = {}
        }
        size() {
          return this._arr.length
        }
        keys() {
          return this._arr.map((yb => yb.key))
        }
        has(yb) {
          return yb in this._keyIndices
        }
        priority(yb) {
          let bb = this._keyIndices[yb];
          if (void 0 !== bb) return this._arr[bb].priority
        }
        min() {
          if (0 === this.size()) throw new Error("Queue underflow");
          return this._arr[0].key
        }
        add(yb, bb) {
          let Wy = this._keyIndices,
            Uy = String(yb);
          if (!(Uy in Wy)) {
            let yb = this._arr,
              hy = yb.length;
            return Wy[Uy] = hy, yb.push({
              key: Uy,
              priority: bb
            }), this._decrease(hy), !0
          }
          return !1
        }
        removeMin() {
          if (0 === this.size()) throw new Error("Queue underflow");
          this._swap(0, this._arr.length - 1);
          let yb = this._arr.pop();
          return delete this._keyIndices[yb.key], this._heapify(0), yb.key
        }
        decrease(yb, bb) {
          let Wy = this._keyIndices[yb];
          if (void 0 === Wy) throw new Error(`Key not found: ${yb}`);
          let Uy = this._arr[Wy].priority;
          if (bb > Uy) throw new Error(`New priority is greater than current priority. Key: ${yb} Old: ${Uy} New: ${bb}`);
          this._arr[Wy].priority = bb, this._decrease(Wy)
        }
        _heapify(yb) {
          let bb = this._arr,
            Wy = 2 * yb,
            Uy = Wy + 1,
            hy = yb;
          Wy < bb.length && (hy = bb[Wy].priority < bb[hy].priority ? Wy : hy, Uy < bb.length && (hy = bb[Uy].priority < bb[hy].priority ? Uy : hy), hy !== yb && (this._swap(yb, hy), this._heapify(hy)))
        }
        _decrease(yb) {
          let bb, Wy = this._arr,
            Uy = Wy[yb].priority;
          for (; 0 !== yb && (bb = yb >> 1, !(Wy[bb].priority < Uy));) this._swap(yb, bb), yb = bb
        }
        _swap(yb, bb) {
          let Wy = this._arr,
            Uy = this._keyIndices,
            hy = Wy[yb],
            fy = Wy[bb];
          Wy[yb] = fy, Wy[bb] = hy, Uy[fy.key] = yb, Uy[hy.key] = bb
        }
      },
      Jy = () => 1;

    function gb(yb, bb, Wy, Uy) {
      return function(yb, bb, Wy, Uy) {
        let hy, fy, Zy = {},
          cb = new Vy,
          Py = function(yb) {
            let bb = yb.v !== hy ? yb.v : yb.w,
              Uy = Zy[bb];
            if (!Uy) return;
            let Py = Wy(yb),
              oy = fy.distance + Py;
            if (Py < 0) throw new Error("dijkstra does not allow negative edge weights. Bad edge: " + yb + " Weight: " + Py);
            oy < Uy.distance && (Uy.distance = oy, Uy.predecessor = hy, cb.decrease(bb, oy))
          };
        for (yb.nodes().forEach((function(yb) {
            let Wy = yb === bb ? 0 : Number.POSITIVE_INFINITY;
            Zy[yb] = {
              distance: Wy,
              predecessor: ""
            }, cb.add(yb, Wy)
          })); cb.size() > 0;) {
          hy = cb.removeMin();
          let yb = Zy[hy];
          if (!yb || yb.distance === Number.POSITIVE_INFINITY) break;
          fy = yb, Uy(hy).forEach(Py)
        }
        return Zy
      }(yb, String(bb), Wy || Jy, Uy || function(bb) {
        var Wy;
        return null != (Wy = yb.outEdges(bb)) ? Wy : []
      })
    }

    function Gy(yb, bb, Wy) {
      return yb.nodes().reduce((function(Uy, hy) {
        return Uy[hy] = gb(yb, hy, bb, Wy), Uy
      }), {})
    }

    function Oy(yb) {
      let bb = 0,
        Wy = [],
        Uy = {},
        hy = [];

      function fy(Zy) {
        var cb;
        let Py = Uy[Zy] = {
          onStack: !0,
          lowlink: bb,
          index: bb++
        };
        if (Wy.push(Zy), null == (cb = yb.successors(Zy)) || cb.forEach((function(yb) {
            if (yb in Uy) {
              let bb = Uy[yb];
              null != bb && bb.onStack && (Py.lowlink = Math.min(Py.lowlink, bb.index))
            } else {
              fy(yb);
              let bb = Uy[yb];
              bb && (Py.lowlink = Math.min(Py.lowlink, bb.lowlink))
            }
          })), Py.lowlink === Py.index) {
          let yb, bb = [];
          do {
            yb = Wy.pop();
            let hy = Uy[yb];
            hy && (hy.onStack = !1), bb.push(yb)
          } while (Zy !== yb);
          hy.push(bb)
        }
      }
      return yb.nodes().forEach((function(yb) {
        yb in Uy || fy(yb)
      })), hy
    }

    function Ry(yb) {
      return Oy(yb).filter((function(bb) {
        var Wy;
        let Uy = bb[0];
        return !!Uy && (bb.length > 1 || 1 === bb.length && (null != (Wy = yb.outEdges(Uy, Uy)) ? Wy : []).length > 0)
      }))
    }
    var vb = () => 1;

    function ib(yb, bb, Wy) {
      return function(yb, bb, Wy) {
        let Uy = {},
          hy = yb.nodes();
        return hy.forEach((function(yb) {
          let fy = {};
          Uy[yb] = fy, fy[yb] = {
            distance: 0,
            predecessor: ""
          }, hy.forEach((function(bb) {
            yb !== bb && (fy[bb] = {
              distance: Number.POSITIVE_INFINITY,
              predecessor: ""
            })
          })), Wy(yb).forEach((function(Wy) {
            let Uy = Wy.v === yb ? Wy.w : Wy.v,
              hy = bb(Wy);
            fy[Uy] = {
              distance: hy,
              predecessor: yb
            }
          }))
        })), hy.forEach((function(yb) {
          let bb = Uy[yb];
          bb && hy.forEach((function(Wy) {
            let fy = Uy[Wy];
            fy && hy.forEach((function(Wy) {
              let Uy = fy[yb],
                hy = bb[Wy],
                Zy = fy[Wy];
              if (Uy && hy && Zy) {
                let yb = Uy.distance + hy.distance;
                yb < Zy.distance && (Zy.distance = yb, Zy.predecessor = hy.predecessor)
              }
            }))
          }))
        })), Uy
      }(yb, bb || vb, Wy || function(bb) {
        var Wy;
        return null != (Wy = yb.outEdges(bb)) ? Wy : []
      })
    }
    var My = class extends Error {
      constructor(yb) {
        super(yb), this.name = "CycleException"
      }
    };

    function Yy(yb) {
      let bb = {},
        Wy = {},
        Uy = [];
      if (yb.sinks().forEach((function hy(fy) {
          var Zy;
          if (fy in Wy) throw new My;
          fy in bb || (Wy[fy] = !0, bb[fy] = !0, null == (Zy = yb.predecessors(fy)) || Zy.forEach(hy), delete Wy[fy], Uy.push(fy))
        })), Object.keys(bb).length !== yb.nodeCount()) throw new My;
      return Uy
    }

    function Xy(yb) {
      try {
        Yy(yb)
      } catch (bb) {
        if (bb instanceof My) return !1;
        throw bb
      }
      return !0
    }

    function ny(yb, bb, Wy, Uy, hy) {
      Array.isArray(bb) || (bb = [bb]);
      let fy = bb => {
          var Wy;
          return null != (Wy = yb.isDirected() ? yb.successors(bb) : yb.neighbors(bb)) ? Wy : []
        },
        Zy = {};
      return bb.forEach((function(bb) {
        if (!yb.hasNode(bb)) throw new Error("Graph does not have node: " + bb);
        hy = uy(yb, bb, "post" === Wy, Zy, fy, Uy, hy)
      })), hy
    }

    function uy(yb, bb, Wy, Uy, hy, fy, Zy) {
      return bb in Uy || (Uy[bb] = !0, Wy || (Zy = fy(Zy, bb)), hy(bb).forEach((function(bb) {
        Zy = uy(yb, bb, Wy, Uy, hy, fy, Zy)
      })), Wy && (Zy = fy(Zy, bb))), Zy
    }

    function rb(yb, bb, Wy) {
      return ny(yb, bb, Wy, (function(yb, bb) {
        return yb.push(bb), yb
      }), [])
    }

    function Hy(yb, bb) {
      return rb(yb, bb, "post")
    }

    function ab(yb, bb) {
      return rb(yb, bb, "pre")
    }

    function Fy(yb, bb) {
      var Wy;
      let Uy, hy = new Py,
        fy = {},
        Zy = new Vy;

      function cb(yb) {
        let Wy = yb.v === Uy ? yb.w : yb.v,
          hy = Zy.priority(Wy);
        if (void 0 !== hy) {
          let cb = bb(yb);
          cb < hy && (fy[Wy] = Uy, Zy.decrease(Wy, cb))
        }
      }
      if (0 === yb.nodeCount()) return hy;
      yb.nodes().forEach((function(yb) {
        Zy.add(yb, Number.POSITIVE_INFINITY), hy.setNode(yb)
      }));
      let oy = yb.nodes()[0];
      void 0 !== oy && Zy.decrease(oy, 0);
      let By = !1;
      for (; Zy.size() > 0;) {
        if (Uy = Zy.removeMin(), Uy in fy) hy.setEdge(Uy, fy[Uy]);
        else {
          if (By) throw new Error("Input graph is not connected: " + yb);
          By = !0
        }
        null == (Wy = yb.nodeEdges(Uy)) || Wy.forEach(cb)
      }
      return hy
    }

    function py(yb, bb, Wy, Uy) {
      return function(yb, bb, Wy, Uy) {
        if (void 0 === Wy) return gb(yb, bb, Wy, Uy);
        let hy = !1,
          fy = yb.nodes();
        for (let Zy = 0; Zy < fy.length; Zy++) {
          let cb = fy[Zy];
          if (void 0 === cb) continue;
          let Py = Uy(cb);
          for (let yb = 0; yb < Py.length; yb++) {
            let bb = Py[yb];
            if (!bb) continue;
            let Uy = bb.v === cb ? bb.v : bb.w;
            Wy({
              v: Uy,
              w: Uy === bb.v ? bb.w : bb.v
            }) < 0 && (hy = !0)
          }
          if (hy) return Cy(yb, bb, Wy, Uy)
        }
        return gb(yb, bb, Wy, Uy)
      }(yb, bb, Wy, null != Uy ? Uy : bb => {
        var Wy;
        return null != (Wy = yb.outEdges(bb)) ? Wy : []
      })
    }
    var Ly = Py;

    function Qy(yb, bb, Wy, Uy) {
      let hy = Uy;
      for (; yb.hasNode(hy);) hy = dy(Uy);
      return Wy.dummy = bb, yb.setNode(hy, Wy), hy
    }

    function jb(yb) {
      let bb = new Ly({
        multigraph: yb.isMultigraph()
      }).setGraph(yb.graph());
      return yb.nodes().forEach((Wy => {
        yb.children(Wy).length || bb.setNode(Wy, yb.node(Wy))
      })), yb.edges().forEach((Wy => {
        bb.setEdge(Wy, yb.edge(Wy))
      })), bb
    }

    function Dy(yb, bb) {
      let Wy, Uy, hy = yb.x,
        fy = yb.y,
        Zy = bb.x - hy,
        cb = bb.y - fy,
        Py = yb.width / 2,
        oy = yb.height / 2;
      if (!Zy && !cb) throw new Error("Not possible to find intersection inside of the rectangle");
      return Math.abs(cb) * Py > Math.abs(Zy) * oy ? (cb < 0 && (oy = -oy), Wy = oy * Zy / cb, Uy = oy) : (Zy < 0 && (Py = -Py), Wy = Py, Uy = Py * cb / Zy), {
        x: hy + Wy,
        y: fy + Uy
      }
    }

    function tb(yb) {
      let bb = yW(zb(yb) + 1).map((() => []));
      return yb.nodes().forEach((Wy => {
        let Uy = yb.node(Wy),
          hy = Uy.rank;
        void 0 !== hy && (bb[hy] || (bb[hy] = []), bb[hy][Uy.order] = Wy)
      })), bb
    }

    function wy(yb, bb, Wy, Uy) {
      let hy = {
        width: 0,
        height: 0
      };
      return arguments.length >= 4 && (hy.rank = Wy, hy.order = Uy), Qy(yb, "border", hy, bb)
    }
    var kb = 65535;

    function Ny(yb, bb) {
      if (bb.length > kb) {
        let Wy = function(yb) {
          let bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : kb,
            Wy = [];
          for (let Uy = 0; Uy < yb.length; Uy += bb) {
            let hy = yb.slice(Uy, Uy + bb);
            Wy.push(hy)
          }
          return Wy
        }(bb);
        return yb(...Wy.map((bb => yb(...bb))))
      }
      return yb(...bb)
    }

    function zb(yb) {
      let bb = yb.nodes().map((bb => {
        let Wy = yb.node(bb).rank;
        return void 0 === Wy ? Number.MIN_VALUE : Wy
      }));
      return Ny(Math.max, bb)
    }

    function Iy(yb, bb) {
      let Wy = Date.now();
      try {
        return bb()
      } finally {
        console.log(yb + " time: " + (Date.now() - Wy) + "ms")
      }
    }

    function xb(yb, bb) {
      return bb()
    }
    var Ay = 0;

    function dy(yb) {
      return yb + "" + ++Ay
    }

    function yW(yb, bb) {
      let Wy = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
      null == bb && (bb = yb, yb = 0);
      let Uy = yb => yb < bb;
      Wy < 0 && (Uy = yb => bb < yb);
      let hy = [];
      for (let fy = yb; Uy(fy); fy += Wy) hy.push(fy);
      return hy
    }

    function bW(yb, bb) {
      let Wy = {};
      for (let Uy of bb) void 0 !== yb[Uy] && (Wy[Uy] = yb[Uy]);
      return Wy
    }

    function Wb(yb, bb) {
      let Wy;
      return Wy = "string" == typeof bb ? yb => yb[bb] : bb, Object.entries(yb).reduce(((yb, bb) => {
        let [Uy, hy] = bb;
        return yb[Uy] = Wy(hy, Uy), yb
      }), {})
    }
    var Ub = "\0";

    function hb(yb, bb, Wy) {
      var Uy, hy, fy, Zy, cb, Py;
      if (!(yb && bb && Wy && "edge" === bb.dummy && "edge" === Wy.dummy && bb.edgeObj && Wy.edgeObj && yb[bb.edgeObj.v] && yb[Wy.edgeObj.v] && yb[bb.edgeObj.w] && yb[Wy.edgeObj.w])) return 0;
      let oy = !0;
      bb.edgeObj.w === Wy.edgeObj.w && (oy = !1);
      let By = oy ? null != (hy = null == (Uy = yb[bb.edgeObj.v]) ? void 0 : Uy.rank) ? hy : NaN : null != (Zy = null == (fy = yb[bb.edgeObj.w]) ? void 0 : fy.rank) ? Zy : NaN,
        Ky = Object.entries(yb).find((yb => {
          var Wy, Uy;
          return (null == (Wy = yb[1].edgeObj) ? void 0 : Wy.v) === bb.edgeObj.v && (null == (Uy = yb[1].edgeObj) ? void 0 : Uy.w) === bb.edgeObj.w && yb[1].rank === By
        })),
        ey = Object.entries(yb).find((yb => {
          var bb, Uy;
          return (null == (bb = yb[1].edgeObj) ? void 0 : bb.v) === Wy.edgeObj.v && (null == (Uy = yb[1].edgeObj) ? void 0 : Uy.w) === Wy.edgeObj.w && yb[1].rank === By
        }));
      if (!Ky || !ey) return 0;
      let qb = null != (cb = Ky[1].order) ? cb : NaN,
        sy = null != (Py = ey[1].order) ? Py : NaN;
      return isNaN(qb - sy) ? 0 : qb - sy
    }
    var fb = "3.1.1";

    function Zb(yb) {
      yb._prev._next = yb._next, yb._next._prev = yb._prev, delete yb._next, delete yb._prev
    }

    function cW(yb, bb) {
      if ("_next" !== yb && "_prev" !== yb) return bb
    }
    var Pb = class {
        constructor() {
          hy(this, "_sentinel");
          let yb = {};
          yb._next = yb._prev = yb, this._sentinel = yb
        }
        dequeue() {
          let yb = this._sentinel,
            bb = yb._prev;
          if (bb !== yb) return Zb(bb), bb
        }
        enqueue(yb) {
          let bb = this._sentinel;
          yb._prev && yb._next && Zb(yb), yb._next = bb._next, bb._next._prev = yb, bb._next = yb, yb._prev = bb
        }
        toString() {
          let yb = [],
            bb = this._sentinel,
            Wy = bb._prev;
          for (; Wy !== bb;) yb.push(JSON.stringify(Wy, cW)), Wy = Wy._prev;
          return "[" + yb.join(", ") + "]"
        }
      },
      ob = () => 1;

    function Bb(yb, bb) {
      if (yb.nodeCount() <= 1) return [];
      let Wy = function(yb, bb) {
        let Wy = new Ly,
          Uy = 0,
          hy = 0;
        yb.nodes().forEach((yb => {
          Wy.setNode(yb, {
            v: yb,
            in: 0,
            out: 0
          })
        })), yb.edges().forEach((yb => {
          let fy = Wy.edge(yb.v, yb.w) || 0,
            Zy = bb(yb),
            cb = fy + Zy;
          Wy.setEdge(yb.v, yb.w, cb);
          let Py = Wy.node(yb.v),
            oy = Wy.node(yb.w);
          hy = Math.max(hy, Py.out += Zy), Uy = Math.max(Uy, oy.in += Zy)
        }));
        let fy = function(yb) {
            let bb = [];
            for (let Wy = 0; Wy < yb; Wy++) bb.push(Wy);
            return bb
          }(hy + Uy + 3).map((() => new Pb)),
          Zy = Uy + 1;
        return Wy.nodes().forEach((yb => {
          eb(fy, Zy, Wy.node(yb))
        })), {
          graph: Wy,
          buckets: fy,
          zeroIdx: Zy
        }
      }(yb, bb || ob);
      return function(yb, bb, Wy) {
        var Uy;
        let hy, fy = [],
          Zy = bb[bb.length - 1],
          cb = bb[0];
        for (; yb.nodeCount();) {
          for (; hy = cb.dequeue();) Kb(yb, bb, Wy, hy);
          for (; hy = Zy.dequeue();) Kb(yb, bb, Wy, hy);
          if (yb.nodeCount())
            for (let Zy = bb.length - 2; Zy > 0; --Zy)
              if (hy = null == (Uy = bb[Zy]) ? void 0 : Uy.dequeue(), hy) {
                fy = fy.concat(Kb(yb, bb, Wy, hy, !0) || []);
                break
              }
        }
        return fy
      }(Wy.graph, Wy.buckets, Wy.zeroIdx).flatMap((bb => yb.outEdges(bb.v, bb.w) || []))
    }

    function Kb(yb, bb, Wy, Uy, hy) {
      let fy = [],
        Zy = hy ? fy : void 0;
      return (yb.inEdges(Uy.v) || []).forEach((Uy => {
        let Zy = yb.edge(Uy),
          cb = yb.node(Uy.v);
        hy && fy.push({
          v: Uy.v,
          w: Uy.w
        }), cb.out -= Zy, eb(bb, Wy, cb)
      })), (yb.outEdges(Uy.v) || []).forEach((Uy => {
        let hy = yb.edge(Uy),
          fy = Uy.w,
          Zy = yb.node(fy);
        Zy.in -= hy, eb(bb, Wy, Zy)
      })), yb.removeNode(Uy.v), Zy
    }

    function eb(yb, bb, Wy) {
      var Uy, hy, fy;
      Wy.out ? Wy.in ? null == (fy = yb[Wy.out - Wy.in + bb]) || fy.enqueue(Wy) : null == (hy = yb[yb.length - 1]) || hy.enqueue(Wy) : null == (Uy = yb[0]) || Uy.enqueue(Wy)
    }

    function qW(yb, bb) {
      var Wy;
      ("greedy" === yb.graph().acyclicer ? Bb(yb, (Wy = yb, yb => Wy.edge(yb).weight)) : function(yb, bb) {
        let Wy = [],
          Uy = {},
          hy = {};

        function fy(bb) {
          Object.hasOwn(hy, bb) || (hy[bb] = !0, Uy[bb] = !0, yb.outEdges(bb).forEach((yb => {
            Object.hasOwn(Uy, yb.w) ? Wy.push(yb) : fy(yb.w)
          })), delete Uy[bb])
        }

        function Zy(fy) {
          var cb;
          Object.hasOwn(hy, fy) || (hy[fy] = !0, Uy[fy] = !0, null == (cb = yb.outEdges(fy)) || cb.forEach((hy => {
            var cb, Py;
            Object.hasOwn(Uy, hy.w) || (null == (cb = bb.node(fy)) ? void 0 : cb.rank) > (null == (Py = bb.node(hy.w)) ? void 0 : Py.rank) && function(yb, bb, Wy) {
              let Uy = new Set;

              function hy(bb) {
                var fy;
                if (yb.sources().includes(bb)) return !0;
                Uy.add(bb);
                for (let Zy of null != (fy = yb.inEdges(bb)) ? fy : [])
                  if ((Zy.v !== Wy.v || Zy.w !== Wy.w) && !Uy.has(Zy.v) && hy(Zy.v)) return !0;
                return !1
              }
              return hy(bb)
            }(yb, hy.w, hy) ? Wy.push(hy) : Zy(hy.w)
          })), delete Uy[fy])
        }
        let cb = fy;
        return bb && "function" == typeof bb.node && (cb = Zy), yb.sources().forEach(cb), yb.nodes().forEach(cb), Wy
      }(yb, null != bb ? bb : null)).forEach((bb => {
        let Wy = yb.edge(bb);
        yb.removeEdge(bb), Wy.forwardName = bb.name, Wy.reversed = !0, yb.setEdge(bb.w, bb.v, Wy, dy("rev"))
      }))
    }

    function sb(yb) {
      yb.graph().dummyChains = [], yb.edges().forEach((bb => function(yb, bb) {
        let Wy, Uy, hy, fy = bb.v,
          Zy = yb.node(fy).rank,
          cb = bb.w,
          Py = yb.node(cb).rank,
          oy = bb.name,
          By = yb.edge(bb),
          Ky = By.labelRank;
        if (Py === Zy + 1) return;
        for (yb.removeEdge(bb), hy = 0, ++Zy; Zy < Py; ++hy, ++Zy) By.points = [], Uy = {
          width: 0,
          height: 0,
          edgeLabel: By,
          edgeObj: bb,
          rank: Zy
        }, Wy = Qy(yb, "edge", Uy, "_d"), Zy === Ky && (Uy.width = By.width, Uy.height = By.height, Uy.dummy = "edge-label", Uy.labelpos = By.labelpos), yb.setEdge(fy, Wy, {
          weight: By.weight
        }, oy), 0 === hy && yb.graph().dummyChains.push(Wy), fy = Wy;
        yb.setEdge(fy, cb, {
          weight: By.weight
        }, oy)
      }(yb, bb)))
    }

    function Sb(yb) {
      let bb = {};
      yb.sources().forEach((function Wy(Uy) {
        let hy = yb.node(Uy);
        if (Object.hasOwn(bb, Uy)) return hy.rank;
        bb[Uy] = !0;
        let fy = yb.outEdges(Uy),
          Zy = fy ? fy.map((bb => null == bb ? Number.POSITIVE_INFINITY : Wy(bb.w) - yb.edge(bb).minlen)) : [],
          cb = Ny(Math.min, Zy);
        return cb === Number.POSITIVE_INFINITY && (cb = 0), hy.rank = cb
      }))
    }

    function Eb(yb, bb) {
      return yb.node(bb.w).rank - yb.node(bb.v).rank - yb.edge(bb).minlen
    }
    var lb = function(yb) {
      let bb = new Ly({
          directed: !1
        }),
        Wy = yb.nodes();
      if (0 === Wy.length) throw new Error("Graph must have at least one node");
      let Uy, hy, fy = Wy[0],
        Zy = yb.nodeCount();
      for (bb.setNode(fy, {}); mW(bb, yb) < Zy && (Uy = Cb(bb, yb), Uy);) hy = bb.hasNode(Uy.v) ? Eb(yb, Uy) : -Eb(yb, Uy), Tb(bb, yb, hy);
      return bb
    };

    function mW(yb, bb) {
      return yb.nodes().forEach((function Wy(Uy) {
        let hy = bb.nodeEdges(Uy);
        hy && hy.forEach((hy => {
          let fy = hy.v,
            Zy = Uy === fy ? hy.w : fy;
          !yb.hasNode(Zy) && !Eb(bb, hy) && (yb.setNode(Zy, {}), yb.setEdge(Uy, Zy, {}), Wy(Zy))
        }))
      })), yb.nodeCount()
    }

    function Cb(yb, bb) {
      return bb.edges().reduce(((Wy, Uy) => {
        let hy = Number.POSITIVE_INFINITY;
        return yb.hasNode(Uy.v) !== yb.hasNode(Uy.w) && (hy = Eb(bb, Uy)), hy < Wy[0] ? [hy, Uy] : Wy
      }), [Number.POSITIVE_INFINITY, null])[1]
    }

    function Tb(yb, bb, Wy) {
      yb.nodes().forEach((yb => bb.node(yb).rank += Wy))
    }
    var {
      preorder: Vb,
      postorder: Jb
    } = ly, gW = Gb;

    function Gb(yb) {
      yb = function(yb) {
        let bb = (new Ly).setGraph(yb.graph());
        return yb.nodes().forEach((Wy => bb.setNode(Wy, yb.node(Wy)))), yb.edges().forEach((Wy => {
          let Uy = bb.edge(Wy.v, Wy.w) || {
              weight: 0,
              minlen: 1
            },
            hy = yb.edge(Wy);
          bb.setEdge(Wy.v, Wy.w, {
            weight: Uy.weight + hy.weight,
            minlen: Math.max(Uy.minlen, hy.minlen)
          })
        })), bb
      }(yb), Sb(yb);
      let bb, Wy, Uy = lb(yb);
      for (vW(Uy), Ob(Uy, yb); bb = Mb(Uy);) Wy = Yb(Uy, yb, bb), Xb(Uy, yb, bb, Wy)
    }

    function Ob(yb, bb) {
      let Wy = Jb(yb, yb.nodes());
      Wy = Wy.slice(0, Wy.length - 1), Wy.forEach((Wy => function(yb, bb, Wy) {
        let Uy = yb.node(Wy).parent,
          hy = yb.edge(Wy, Uy);
        hy.cutvalue = Rb(yb, bb, Wy)
      }(yb, bb, Wy)))
    }

    function Rb(yb, bb, Wy) {
      let Uy = yb.node(Wy).parent,
        hy = !0,
        fy = bb.edge(Wy, Uy),
        Zy = 0;
      fy || (hy = !1, fy = bb.edge(Uy, Wy)), Zy = fy.weight;
      let cb = bb.nodeEdges(Wy);
      return cb && cb.forEach((fy => {
        let cb = fy.v === Wy,
          Py = cb ? fy.w : fy.v;
        if (Py !== Uy) {
          let Uy = cb === hy,
            oy = bb.edge(fy).weight;
          if (Zy += Uy ? oy : -oy, function(yb, bb, Wy) {
              return yb.hasEdge(bb, Wy)
            }(yb, Wy, Py)) {
            let bb = yb.edge(Wy, Py).cutvalue;
            Zy += Uy ? -bb : bb
          }
        }
      })), Zy
    }

    function vW(yb, bb) {
      arguments.length < 2 && (bb = yb.nodes()[0]), iW(yb, {}, 1, bb)
    }

    function iW(yb, bb, Wy, Uy, hy) {
      let fy = Wy,
        Zy = yb.node(Uy);
      bb[Uy] = !0;
      let cb = yb.neighbors(Uy);
      return cb && cb.forEach((hy => {
        Object.hasOwn(bb, hy) || (Wy = iW(yb, bb, Wy, hy, Uy))
      })), Zy.low = fy, Zy.lim = Wy++, hy ? Zy.parent = hy : delete Zy.parent, Wy
    }

    function Mb(yb) {
      return yb.edges().find((bb => yb.edge(bb).cutvalue < 0))
    }

    function Yb(yb, bb, Wy) {
      let Uy = Wy.v,
        hy = Wy.w;
      bb.hasEdge(Uy, hy) || (Uy = Wy.w, hy = Wy.v);
      let fy = yb.node(Uy),
        Zy = yb.node(hy),
        cb = fy,
        Py = !1;
      return fy.lim > Zy.lim && (cb = Zy, Py = !0), bb.edges().filter((bb => Py === nb(yb, yb.node(bb.v), cb) && Py !== nb(yb, yb.node(bb.w), cb))).reduce(((yb, Wy) => Eb(bb, Wy) < Eb(bb, yb) ? Wy : yb))
    }

    function Xb(yb, bb, Wy, Uy) {
      let hy = Wy.v,
        fy = Wy.w;
      yb.removeEdge(hy, fy), yb.setEdge(Uy.v, Uy.w, {}), vW(yb), Ob(yb, bb),
        function(yb, bb) {
          let Wy = yb.nodes().find((bb => !yb.node(bb).parent));
          if (!Wy) return;
          let Uy = Vb(yb, [Wy]);
          Uy = Uy.slice(1), Uy.forEach((Wy => {
            let Uy = yb.node(Wy).parent,
              hy = bb.edge(Wy, Uy),
              fy = !1;
            hy || (hy = bb.edge(Uy, Wy), fy = !0), bb.node(Wy).rank = bb.node(Uy).rank + (fy ? hy.minlen : -hy.minlen)
          }))
        }(yb, bb)
    }

    function nb(yb, bb, Wy) {
      return Wy.low <= bb.lim && bb.lim <= Wy.lim
    }
    Gb.initLowLimValues = vW, Gb.initCutValues = Ob, Gb.calcCutValue = Rb, Gb.leaveEdge = Mb, Gb.enterEdge = Yb, Gb.exchangeEdges = Xb;
    var ub = function(yb) {
      let bb = yb.graph().ranker;
      if ("function" == typeof bb) return bb(yb);
      switch (bb) {
        case "network-simplex":
        default:
          Hb(yb);
          break;
        case "tight-tree":
          ! function(yb) {
            Sb(yb), lb(yb)
          }(yb);
          break;
        case "longest-path":
          rW(yb);
        case "none":
      }
    };
    var rW = Sb;

    function Hb(yb) {
      gW(yb)
    }
    var aW = function(yb) {
      let bb = function(yb) {
          let bb = {},
            Wy = 0;

          function Uy(hy) {
            let fy = Wy;
            yb.children(hy).forEach(Uy), bb[hy] = {
              low: fy,
              lim: Wy++
            }
          }
          return yb.children(Ub).forEach(Uy), bb
        }(yb),
        Wy = yb.graph();
      if (!Array.isArray(Wy.dummyChains)) return;
      Wy.dummyChains.forEach((Wy => {
        let Uy = yb.node(Wy),
          hy = Uy.edgeObj,
          fy = function(yb, bb, Wy, Uy) {
            let hy, fy = [],
              Zy = [],
              cb = Math.min(bb[Wy].low, bb[Uy].low),
              Py = Math.max(bb[Wy].lim, bb[Uy].lim);
            hy = Wy;
            do {
              hy = yb.parent(hy), fy.push(hy)
            } while (hy && (bb[hy].low > cb || Py > bb[hy].lim));
            let oy = hy,
              By = Uy;
            for (;
              (By = yb.parent(By)) !== oy;) Zy.push(By);
            return {
              path: fy.concat(Zy.reverse()),
              lca: oy
            }
          }(yb, bb, hy.v, hy.w),
          Zy = fy.path,
          cb = fy.lca,
          Py = 0,
          oy = Zy[Py],
          By = !0;
        for (; Wy !== hy.w;) {
          if (Uy = yb.node(Wy), By) {
            for (;
              (oy = Zy[Py]) !== cb && yb.node(oy).maxRank < Uy.rank;) Py++;
            oy === cb && (By = !1)
          }
          if (!By) {
            for (; Py < Zy.length - 1 && yb.node(Zy[Py + 1]).minRank <= Uy.rank;) Py++;
            oy = Zy[Py]
          }
          void 0 !== oy && yb.setParent(Wy, oy), Wy = yb.successors(Wy)[0]
        }
      }))
    };

    function Fb(yb) {
      let bb = Qy(yb, "root", {}, "_root"),
        Wy = function(yb) {
          let bb = {};

          function Wy(Uy, hy) {
            let fy = yb.children(Uy);
            fy && fy.length && fy.forEach((yb => Wy(yb, hy + 1))), bb[Uy] = hy
          }
          return yb.children(Ub).forEach((yb => Wy(yb, 1))), bb
        }(yb),
        Uy = Object.values(Wy),
        hy = Ny(Math.max, Uy) - 1,
        fy = 2 * hy + 1;
      yb.graph().nestingRoot = bb, yb.edges().forEach((bb => yb.edge(bb).minlen *= fy));
      let Zy = function(yb) {
        return yb.edges().reduce(((bb, Wy) => bb + yb.edge(Wy).weight), 0)
      }(yb) + 1;
      yb.children(Ub).forEach((Uy => {
        pb(yb, bb, fy, Zy, hy, Wy, Uy)
      })), yb.graph().nodeRankFactor = fy
    }

    function pb(yb, bb, Wy, Uy, hy, fy, Zy) {
      var cb;
      let Py = yb.children(Zy);
      if (!Py.length) return void(Zy !== bb && yb.setEdge(bb, Zy, {
        weight: 0,
        minlen: Wy
      }));
      let oy = wy(yb, "_bt"),
        By = wy(yb, "_bb"),
        Ky = yb.node(Zy);
      yb.setParent(oy, Zy), Ky.borderTop = oy, yb.setParent(By, Zy), Ky.borderBottom = By, Py.forEach((cb => {
        var Py;
        pb(yb, bb, Wy, Uy, hy, fy, cb);
        let Ky = yb.node(cb),
          ey = Ky.borderTop ? Ky.borderTop : cb,
          qb = Ky.borderBottom ? Ky.borderBottom : cb,
          sy = Ky.borderTop ? Uy : 2 * Uy,
          Sy = ey !== qb ? 1 : hy - (null != (Py = fy[Zy]) ? Py : 0) + 1;
        yb.setEdge(oy, ey, {
          weight: sy,
          minlen: Sy,
          nestingEdge: !0
        }), yb.setEdge(qb, By, {
          weight: sy,
          minlen: Sy,
          nestingEdge: !0
        })
      })), yb.parent(Zy) || yb.setEdge(bb, oy, {
        weight: 0,
        minlen: hy + (null != (cb = fy[Zy]) ? cb : 0)
      })
    }
    var Lb = function(yb) {
      yb.children(Ub).forEach((function bb(Wy) {
        let Uy = yb.children(Wy),
          hy = yb.node(Wy);
        if (Uy.length && Uy.forEach(bb), hy && Object.hasOwn(hy, "minRank")) {
          hy.borderLeft = [], hy.borderRight = [];
          for (let bb = hy.minRank, Uy = hy.maxRank + 1; bb < Uy; ++bb) Qb(yb, "borderLeft", "_bl", Wy, hy, bb), Qb(yb, "borderRight", "_br", Wy, hy, bb)
        }
      }))
    };

    function Qb(yb, bb, Wy, Uy, hy, fy) {
      let Zy = {
          width: 0,
          height: 0,
          rank: fy,
          borderType: bb
        },
        cb = hy[bb][fy - 1],
        Py = Qy(yb, "border", Zy, Wy);
      hy[bb][fy] = Py, yb.setParent(Py, Uy), cb && yb.setEdge(cb, Py, {
        weight: 1
      })
    }

    function jW(yb) {
      var bb;
      let Wy = null == (bb = yb.graph().rankdir) ? void 0 : bb.toLowerCase();
      ("bt" === Wy || "rl" === Wy) && function(yb) {
        yb.nodes().forEach((bb => wb(yb.node(bb)))), yb.edges().forEach((bb => {
          var Wy;
          let Uy = yb.edge(bb);
          null == (Wy = Uy.points) || Wy.forEach(wb), Object.hasOwn(Uy, "y") && wb(Uy)
        }))
      }(yb), ("lr" === Wy || "rl" === Wy) && (function(yb) {
        yb.nodes().forEach((bb => kW(yb.node(bb)))), yb.edges().forEach((bb => {
          var Wy;
          let Uy = yb.edge(bb);
          null == (Wy = Uy.points) || Wy.forEach(kW), Object.hasOwn(Uy, "x") && kW(Uy)
        }))
      }(yb), Db(yb))
    }

    function Db(yb) {
      yb.nodes().forEach((bb => tW(yb.node(bb)))), yb.edges().forEach((bb => tW(yb.edge(bb))))
    }

    function tW(yb) {
      let bb = yb.width;
      yb.width = yb.height, yb.height = bb
    }

    function wb(yb) {
      yb.y = -yb.y
    }

    function kW(yb) {
      let bb = yb.x;
      yb.x = yb.y, yb.y = bb
    }

    function Nb(yb) {
      let bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
        Wy = {},
        Uy = yb.nodes().filter((bb => !yb.children(bb).length)),
        hy = Uy.map((bb => yb.node(bb).rank)),
        fy = yW(Ny(Math.max, hy) + 1).map((() => []));
      return Uy.sort(((bb, Wy) => yb.node(bb).rank - yb.node(Wy).rank)).forEach((function Uy(hy) {
        if (Wy[hy]) return;
        Wy[hy] = !0;
        let Zy = yb.node(hy);
        fy[Zy.rank].push(hy);
        let cb = yb.successors(hy);
        cb && [...cb].sort(((Wy, Uy) => function(Wy, Uy) {
          let hy = yb.node(Wy),
            fy = yb.node(Uy);
          return hb(bb, hy, fy)
        }(Wy, Uy))).forEach(Uy)
      })), fy
    }

    function zW(yb, bb) {
      let Wy = 0;
      for (let Uy = 1; Uy < bb.length; ++Uy) Wy += Ib(yb, bb[Uy - 1], bb[Uy]);
      return Wy
    }

    function Ib(yb, bb, Wy) {
      let Uy = function(yb, bb) {
          return yb.reduce(((yb, Wy, Uy) => (yb[Wy] = bb[Uy], yb)), {})
        }(Wy, Wy.map(((yb, bb) => bb))),
        hy = bb.flatMap((bb => {
          let Wy = yb.outEdges(bb);
          return Wy ? Wy.map((bb => ({
            pos: Uy[bb.w],
            weight: yb.edge(bb).weight
          }))).sort(((yb, bb) => yb.pos - bb.pos)) : []
        })),
        fy = 1;
      for (; fy < Wy.length;) fy <<= 1;
      let Zy = 2 * fy - 1;
      fy -= 1;
      let cb = new Array(Zy).fill(0),
        Py = 0;
      return hy.forEach((yb => {
        let bb = yb.pos + fy;
        cb[bb] += yb.weight;
        let Wy = 0;
        for (; bb > 0;) bb % 2 && (Wy += cb[bb + 1]), bb = bb - 1 >> 1, cb[bb] += yb.weight;
        Py += yb.weight * Wy
      })), Py
    }

    function xW(yb, bb) {
      let Wy = {};
      return yb.forEach(((yb, bb) => {
          let Uy = {
            indegree: 0,
            in: [],
            out: [],
            vs: [yb.v],
            i: bb
          };
          void 0 !== yb.barycenter && (Uy.barycenter = yb.barycenter, Uy.weight = yb.weight), Wy[yb.v] = Uy
        })), bb.edges().forEach((yb => {
          let bb = Wy[yb.v],
            Uy = Wy[yb.w];
          void 0 !== bb && void 0 !== Uy && (Uy.indegree++, bb.out.push(Uy))
        })),
        function(yb) {
          let bb = [];

          function Wy(yb) {
            return bb => {
              bb.merged || (void 0 === bb.barycenter || void 0 === yb.barycenter || bb.barycenter >= yb.barycenter) && function(yb, bb) {
                let Wy = 0,
                  Uy = 0;
                yb.weight && (Wy += yb.barycenter * yb.weight, Uy += yb.weight), bb.weight && (Wy += bb.barycenter * bb.weight, Uy += bb.weight), yb.vs = bb.vs.concat(yb.vs), yb.barycenter = Wy / Uy, yb.weight = Uy, yb.i = Math.min(bb.i, yb.i), bb.merged = !0
              }(yb, bb)
            }
          }

          function Uy(bb) {
            return Wy => {
              Wy.in.push(bb), 0 === --Wy.indegree && yb.push(Wy)
            }
          }
          for (; yb.length;) {
            let hy = yb.pop();
            bb.push(hy), hy.in.reverse().forEach(Wy(hy)), hy.out.forEach(Uy(hy))
          }
          return bb.filter((yb => !yb.merged)).map((yb => bW(yb, ["vs", "i", "barycenter", "weight"])))
        }(Object.values(Wy).filter((yb => !yb.indegree)))
    }

    function Ab(yb, bb, Wy, Uy, hy) {
      let fy = {},
        Zy = null,
        cb = null,
        Py = hy;
      "boolean" == typeof bb ? (Py = bb, fy = {}) : bb && (fy = bb, Zy = null != Wy ? Wy : null, cb = null != Uy ? Uy : null);
      let oy = function(yb, bb) {
          let Wy = {
            lhs: [],
            rhs: []
          };
          return yb.forEach((yb => {
            bb(yb) ? Wy.lhs.push(yb) : Wy.rhs.push(yb)
          })), Wy
        }(yb, (yb => Object.hasOwn(yb, "barycenter"))),
        By = oy.lhs,
        Ky = oy.rhs.sort(((yb, bb) => bb.i - yb.i)),
        ey = [],
        qb = 0,
        sy = 0,
        Sy = 0;
      By.sort(function(yb, bb, Wy) {
        return (Uy, hy) => {
          if (Uy.barycenter < hy.barycenter) return -1;
          if (Uy.barycenter > hy.barycenter) return 1;
          if (yb && ("string" == typeof Uy.vs[0] || "string" == typeof hy.vs[0])) {
            let Wy = yb.node(Uy.vs[0]),
              fy = yb.node(hy.vs[0]),
              Zy = hb(bb, Wy, fy);
            if (0 !== Zy) return Zy
          }
          return Wy ? hy.i - Uy.i : Uy.i - hy.i
        }
      }(cb, Zy, !!Py));
      for (let [ly, mb] of Object.entries(fy)) {
        let yb = By.findIndex((yb => yb.vs[0] === ly));
        By.splice(yb + 1, 0, mb)
      }
      Sy = db(ey, Ky, Sy), By.forEach((yb => {
        Sy += yb.vs.length, ey.push(yb.vs), qb += yb.barycenter * yb.weight, sy += yb.weight, Sy = db(ey, Ky, Sy)
      }));
      let Ey = {
        vs: ey.flat(1)
      };
      return sy && (Ey.barycenter = qb / sy, Ey.weight = sy), Ey
    }

    function db(yb, bb, Wy) {
      let Uy;
      for (; bb.length && (Uy = bb[bb.length - 1]).i <= Wy;) bb.pop(), yb.push(Uy.vs), Wy++;
      return Wy
    }

    function yU(yb, bb, Wy, Uy, hy) {
      var fy, Zy, cb, Py, oy, By, Ky, ey, qb, sy, Sy;
      let Ey = null,
        ly = hy;
      "boolean" == typeof Uy ? (ly = Uy, Ey = null) : void 0 !== Uy && (Ey = Uy);
      let mb = yb.children(bb),
        Cy = yb.node(bb),
        Ty = Cy ? Cy.borderLeft : void 0,
        Vy = Cy ? Cy.borderRight : void 0,
        Jy = {};
      Ty && (mb = mb.filter((yb => yb !== Ty && yb !== Vy)));
      let gb = function(yb) {
        return (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : []).map((bb => {
          let Wy = yb.inEdges(bb);
          if (!Wy || !Wy.length) return {
            v: bb
          };
          {
            let Uy = Wy.reduce(((bb, Wy) => {
              let Uy = yb.edge(Wy),
                hy = yb.node(Wy.v);
              return {
                sum: bb.sum + Uy.weight * hy.order,
                weight: bb.weight + Uy.weight
              }
            }), {
              sum: 0,
              weight: 0
            });
            return {
              v: bb,
              barycenter: Uy.sum / Uy.weight,
              weight: Uy.weight
            }
          }
        }))
      }(yb, mb);
      gb.forEach((bb => {
        if (yb.children(bb.v).length) {
          let {
            result: Uy
          } = yU(yb, bb.v, Wy, Ey, ly);
          Jy[bb.v] = Uy, Object.hasOwn(Uy, "barycenter") && function(yb, bb) {
            void 0 !== yb.barycenter ? (yb.barycenter = (yb.barycenter * yb.weight + bb.barycenter * bb.weight) / (yb.weight + bb.weight), yb.weight += bb.weight) : (yb.barycenter = bb.barycenter, yb.weight = bb.weight)
          }(bb, Uy)
        }
      }));
      let Gy = xW(gb, Wy);
      ! function(yb, bb) {
        yb.forEach((yb => {
          yb.vs = yb.vs.flatMap((yb => bb[yb] ? bb[yb].vs : yb))
        }))
      }(Gy, Jy);
      let Oy = {},
        Ry = !1;
      for (let ib = 0; ib < Gy.length; ib++)
        for (let bb = ib + 1; bb < Gy.length; bb++)
          if (Gy[ib] && Gy[bb] && null != (fy = Gy[ib]) && fy.barycenter && null != (Zy = Gy[bb]) && Zy.barycenter && (null == (cb = Gy[ib]) ? void 0 : cb.barycenter) === Gy[bb].barycenter) {
            let Wy = null != (oy = null == (Py = Gy[ib]) ? void 0 : Py.vs[0]) ? oy : "",
              Uy = null != (Ky = null == (By = Gy[bb]) ? void 0 : By.vs[0]) ? Ky : "",
              hy = yb.node(Wy),
              fy = yb.node(Uy);
            if ("edge" === hy.dummy && "edge" === fy.dummy && (null == (ey = hy.edgeObj) ? void 0 : ey.v) === (null == (qb = fy.edgeObj) ? void 0 : qb.v) && (null == (sy = hy.edgeObj) ? void 0 : sy.w) === (null == (Sy = fy.edgeObj) ? void 0 : Sy.w)) {
              if (hy.edgeLabel.reversed) {
                Oy[Uy] = Gy[ib], Gy.splice(ib, 1), ib--;
                break
              }
              Oy[Wy] = Gy[bb], Gy.splice(bb, 1), bb--
            } else Ry = !0
          } let vb = Ab(Gy, Oy, Ey, yb, ly);
      if (Ty && Vy) {
        vb.vs = [Ty, vb.vs, Vy].flat(1);
        let bb = yb.predecessors(Ty);
        if (bb && bb.length) {
          let Wy = yb.node(bb[0]),
            Uy = yb.predecessors(Vy),
            hy = yb.node(Uy[0]);
          Object.hasOwn(vb, "barycenter") || (vb.barycenter = 0, vb.weight = 0), vb.barycenter = (vb.barycenter * vb.weight + Wy.order + hy.order) / (vb.weight + 2), vb.weight += 2
        }
      }
      return Object.defineProperty(vb, "result", {
        value: vb,
        enumerable: !1,
        configurable: !0,
        writable: !0
      }), Object.defineProperty(vb, "usedBias", {
        value: Ry,
        enumerable: !1,
        configurable: !0,
        writable: !0
      }), vb
    }

    function bU(yb, bb, Wy, Uy) {
      Uy || (Uy = yb.nodes());
      let hy = function(yb) {
          let bb;
          for (; yb.hasNode(bb = dy("_root")););
          return bb
        }(yb),
        fy = new Ly({
          compound: !0
        }).setGraph({
          root: hy
        }).setDefaultNodeLabel((bb => yb.node(bb)));
      return Uy.forEach((Uy => {
        let Zy = yb.node(Uy),
          cb = yb.parent(Uy);
        if (Zy.rank === bb || Zy.minRank <= bb && bb <= Zy.maxRank) {
          fy.setNode(Uy), fy.setParent(Uy, cb || hy);
          let Py = yb[Wy](Uy);
          Py && Py.forEach((bb => {
            let Wy = bb.v === Uy ? bb.w : bb.v,
              hy = fy.edge(Wy, Uy),
              Zy = void 0 !== hy ? hy.weight : 0;
            fy.setEdge(Wy, Uy, {
              weight: yb.edge(bb).weight + Zy
            })
          })), Object.hasOwn(Zy, "minRank") && fy.setNode(Uy, {
            borderLeft: Zy.borderLeft[bb],
            borderRight: Zy.borderRight[bb]
          })
        }
      })), fy
    }

    function WW(yb) {
      let bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        Wy = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
      if ("function" == typeof bb.customOrder) return void bb.customOrder(yb, WW);
      let Uy = zb(yb),
        hy = UW(yb, yW(1, Uy + 1), "inEdges"),
        fy = UW(yb, yW(Uy - 1, -1, -1), "outEdges"),
        Zy = Nb(yb, Wy);
      if (fW(yb, Zy), bb.disableOptimalOrderHeuristic) return;
      let cb, Py = Number.POSITIVE_INFINITY,
        oy = bb.constraints || [];
      for (let By = 0, Ky = 0; Ky < 4; ++By, ++Ky) {
        hW(By % 2 ? hy : fy, By % 4 >= 2, oy, Wy), Zy = tb(yb);
        let bb = zW(yb, Zy);
        bb < Py ? (Ky = 0, cb = Object.assign({}, Zy), Py = bb) : bb === Py && (cb = structuredClone(Zy))
      }
      fW(yb, cb)
    }

    function UW(yb, bb, Wy) {
      let Uy = new Map,
        hy = (yb, bb) => {
          Uy.has(yb) || Uy.set(yb, []), Uy.get(yb).push(bb)
        };
      for (let fy of yb.nodes()) {
        let bb = yb.node(fy);
        if ("number" == typeof bb.rank && hy(bb.rank, fy), "number" == typeof bb.minRank && "number" == typeof bb.maxRank)
          for (let yb = bb.minRank; yb <= bb.maxRank; yb++) yb !== bb.rank && hy(yb, fy)
      }
      return bb.map((function(bb) {
        return bU(yb, bb, Wy, Uy.get(bb) || [])
      }))
    }

    function hW(yb, bb, Wy, Uy) {
      let hy = !0,
        fy = new Ly;
      yb.forEach((function(yb) {
        Wy.forEach((yb => fy.setEdge(yb.left, yb.right)));
        let Zy = yb.graph().root,
          {
            result: cb,
            usedBias: Py
          } = yU(yb, Zy, fy, Uy, hy);
        bb && Py && (hy = !hy), cb.vs.forEach(((bb, Wy) => yb.node(bb).order = Wy)),
          function(yb, bb, Wy) {
            let Uy, hy = {};
            Wy.forEach((Wy => {
              let fy, Zy, cb = yb.parent(Wy);
              for (; cb;) {
                if (fy = yb.parent(cb), fy ? (Zy = hy[fy], hy[fy] = cb) : (Zy = Uy, Uy = cb), Zy && Zy !== cb) return void bb.setEdge(Zy, cb);
                cb = fy
              }
            }))
          }(yb, fy, cb.vs)
      }))
    }

    function fW(yb, bb) {
      Object.values(bb).forEach((bb => bb.forEach(((bb, Wy) => yb.node(bb).order = Wy))))
    }

    function ZW(yb, bb, Wy) {
      if (bb > Wy) {
        let yb = bb;
        bb = Wy, Wy = yb
      }
      let Uy = yb[bb];
      Uy || (yb[bb] = Uy = {}), Uy[Wy] = !0
    }

    function cU(yb, bb, Wy) {
      if (bb > Wy) {
        let yb = bb;
        bb = Wy, Wy = yb
      }
      let Uy = yb[bb];
      return void 0 !== Uy && Object.hasOwn(Uy, Wy)
    }

    function PW(yb, bb, Wy, Uy) {
      let hy = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
        fy = {},
        Zy = function(yb, bb, Wy, Uy) {
          let hy = new Ly,
            fy = yb.graph(),
            Zy = function(yb, bb, Wy) {
              return (Uy, hy, fy) => {
                let Zy, cb = Uy.node(hy),
                  Py = Uy.node(fy),
                  oy = 0;
                if (oy += cb.width / 2, Object.hasOwn(cb, "labelpos")) switch (cb.labelpos.toLowerCase()) {
                  case "l":
                    Zy = -cb.width / 2;
                    break;
                  case "r":
                    Zy = cb.width / 2
                }
                if (Zy && (oy += Wy ? Zy : -Zy), Zy = void 0, oy += (cb.dummy ? bb : yb) / 2, oy += (Py.dummy ? bb : yb) / 2, oy += Py.width / 2, Object.hasOwn(Py, "labelpos")) switch (Py.labelpos.toLowerCase()) {
                  case "l":
                    Zy = Py.width / 2;
                    break;
                  case "r":
                    Zy = -Py.width / 2
                }
                return Zy && (oy += Wy ? Zy : -Zy), oy
              }
            }(fy.nodesep, fy.edgesep, Uy);
          return bb.forEach((bb => {
            let Uy;
            bb.forEach((bb => {
              let fy = Wy[bb];
              if (void 0 !== fy) {
                if (hy.setNode(fy), void 0 !== Uy) {
                  let cb = Wy[Uy];
                  if (void 0 !== cb) {
                    let Wy = hy.edge(cb, fy);
                    hy.setEdge(cb, fy, Math.max(Zy(yb, bb, Uy), Wy || 0))
                  }
                }
                Uy = bb
              }
            }))
          })), hy
        }(yb, bb, Wy, hy),
        cb = hy ? "borderLeft" : "borderRight";

      function Py(yb, bb) {
        let Wy = Zy.nodes().slice(),
          Uy = {},
          hy = Wy.pop();
        for (; hy;) {
          if (Uy[hy]) yb(hy);
          else {
            Uy[hy] = !0, Wy.push(hy);
            for (let yb of bb(hy)) Wy.push(yb)
          }
          hy = Wy.pop()
        }
      }
      return Py((function(yb) {
        let bb = Zy.inEdges(yb);
        fy[yb] = bb ? bb.reduce(((yb, bb) => {
          var Wy;
          let Uy = null != (Wy = fy[bb.v]) ? Wy : 0,
            hy = Zy.edge(bb);
          return Math.max(yb, Uy + (void 0 !== hy ? hy : 0))
        }), 0) : 0
      }), (function(yb) {
        return Zy.predecessors(yb) || []
      })), Py((function(bb) {
        let Wy = Zy.outEdges(bb),
          Uy = Number.POSITIVE_INFINITY;
        Wy && (Uy = Wy.reduce(((yb, bb) => {
          let Wy = fy[bb.w],
            Uy = Zy.edge(bb);
          return Math.min(yb, (void 0 !== Wy ? Wy : 0) - (void 0 !== Uy ? Uy : 0))
        }), Number.POSITIVE_INFINITY));
        let hy = yb.node(bb);
        Uy !== Number.POSITIVE_INFINITY && hy.borderType !== cb && (fy[bb] = Math.max(void 0 !== fy[bb] ? fy[bb] : 0, Uy))
      }), (function(yb) {
        return Zy.successors(yb) || []
      })), Object.keys(Uy).forEach((yb => {
        var bb;
        let Uy = Wy[yb];
        void 0 !== Uy && (fy[yb] = null != (bb = fy[Uy]) ? bb : 0)
      })), fy
    }

    function oW(yb, bb) {
      let Wy, Uy = tb(yb),
        hy = Object.assign(function(yb, bb) {
          let Wy = {};
          return bb.length && bb.reduce((function(bb, Uy) {
            let hy = 0,
              fy = 0,
              Zy = bb.length,
              cb = Uy[Uy.length - 1];
            return Uy.forEach(((bb, Py) => {
              let oy = function(yb, bb) {
                  if (yb.node(bb).dummy) {
                    let Wy = yb.predecessors(bb);
                    if (Wy) return Wy.find((bb => yb.node(bb).dummy))
                  }
                }(yb, bb),
                By = oy ? yb.node(oy).order : Zy;
              (oy || bb === cb) && (Uy.slice(fy, Py + 1).forEach((bb => {
                let Uy = yb.predecessors(bb);
                Uy && Uy.forEach((Uy => {
                  let fy = yb.node(Uy),
                    Zy = fy.order;
                  (Zy < hy || By < Zy) && (!fy.dummy || !yb.node(bb).dummy) && ZW(Wy, Uy, bb)
                }))
              })), fy = Py + 1, hy = By)
            })), Uy
          })), Wy
        }(yb, Uy), function(yb, bb) {
          let Wy = {};

          function Uy(bb, Uy, hy, fy, Zy) {
            yW(Uy, hy).forEach((Uy => {
              let hy = bb[Uy];
              if (void 0 !== hy && yb.node(hy).dummy) {
                let bb = yb.predecessors(hy);
                bb && bb.forEach((bb => {
                  if (void 0 === bb) return;
                  let Uy = yb.node(bb);
                  Uy.dummy && (Uy.order < fy || Uy.order > Zy) && ZW(Wy, bb, hy)
                }))
              }
            }))
          }
          return bb.length && bb.reduce((function(bb, Wy) {
            let hy = -1,
              fy = -1,
              Zy = 0;
            return Wy.forEach(((cb, Py) => {
              if ("border" === yb.node(cb).dummy) {
                let bb = yb.predecessors(cb);
                if (bb && bb.length) {
                  let cb = bb[0];
                  if (void 0 === cb) return;
                  fy = yb.node(cb).order, Uy(Wy, Zy, Py, hy, fy), Zy = Py, hy = fy
                }
              }
              Uy(Wy, Zy, Wy.length, fy, bb.length)
            })), Wy
          })), Wy
        }(yb, Uy)),
        fy = {};
      ["u", "d"].forEach((Zy => {
        Wy = "u" === Zy ? Uy : Object.values(Uy).reverse(), ["l", "r"].forEach((Uy => {
          "r" === Uy && (Wy = Wy.map((yb => Object.values(yb).reverse())));
          let cb = function(yb, bb, Wy, Uy, hy) {
              let fy = {},
                Zy = {},
                cb = {};
              return bb.forEach((yb => {
                yb.forEach(((yb, bb) => {
                  fy[yb] = yb, Zy[yb] = yb, cb[yb] = bb
                }))
              })), bb.forEach((bb => {
                let Py = -1,
                  oy = -1,
                  By = !1,
                  Ky = bb,
                  ey = bb.findIndex((bb => (null == hy ? void 0 : hy.includes(bb)) || BW(bb, yb, hy)));
                ey > 0 && (Ky = [bb[ey], ...bb.slice(0, ey), ...bb.slice(ey + 1)], By = !0), Ky.forEach((bb => {
                  var Ky;
                  let ey = Uy(bb);
                  if (ey && ey.length) {
                    null != hy && hy.includes(bb) && (ey = ey.filter((bb => BW(bb, yb, hy))));
                    let Uy = ey.sort(((yb, bb) => {
                        let Wy = cb[yb],
                          Uy = cb[bb];
                        return (void 0 !== Wy ? Wy : 0) - (void 0 !== Uy ? Uy : 0)
                      })),
                      qb = (Uy.length - 1) / 2;
                    for (let yb = Math.floor(qb), hy = Math.ceil(qb); yb <= hy; ++yb) {
                      let hy = Uy[yb];
                      if (void 0 === hy) continue;
                      let ey = cb[hy];
                      if (void 0 !== ey && Zy[bb] === bb && Py < ey && cb[hy] !== oy && !cU(Wy, bb, hy)) {
                        let yb = fy[hy];
                        void 0 !== yb && (Zy[hy] = bb, Zy[bb] = fy[bb] = yb, Py = ey, By && (Py = -1, oy = null != (Ky = cb[hy]) ? Ky : -1, By = !1))
                      }
                    }
                  }
                }))
              })), {
                root: fy,
                align: Zy
              }
            }(yb, Wy, hy, (bb => ("u" === Zy ? yb.predecessors(bb) : yb.successors(bb)) || []), bb),
            Py = PW(yb, Wy, cb.root, cb.align, "r" === Uy);
          "r" === Uy && (Py = Wb(Py, (yb => -yb))), fy[Zy + Uy] = Py
        }))
      }));
      let Zy = function(yb, bb) {
        return Object.values(bb).reduce(((bb, Wy) => {
          let Uy = Number.NEGATIVE_INFINITY,
            hy = Number.POSITIVE_INFINITY;
          Object.entries(Wy).forEach((bb => {
            let [Wy, fy] = bb, Zy = function(yb, bb) {
              return yb.node(bb).width
            }(yb, Wy) / 2;
            Uy = Math.max(fy + Zy, Uy), hy = Math.min(fy - Zy, hy)
          }));
          let fy = Uy - hy;
          return fy < bb[0] && (bb = [fy, Wy]), bb
        }), [Number.POSITIVE_INFINITY, null])[1]
      }(yb, fy);
      return function(yb, bb) {
          let Wy = Object.values(bb),
            Uy = Ny(Math.min, Wy),
            hy = Ny(Math.max, Wy);
          ["u", "d"].forEach((Wy => {
            ["l", "r"].forEach((fy => {
              let Zy = Wy + fy,
                cb = yb[Zy];
              if (!cb || cb === bb) return;
              let Py = Object.values(cb),
                oy = Uy - Ny(Math.min, Py);
              "l" !== fy && (oy = hy - Ny(Math.max, Py)), oy && (yb[Zy] = Wb(cb, (yb => yb + oy)))
            }))
          }))
        }(fy, Zy),
        function(yb) {
          let bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
            Wy = yb.ul;
          return Wy ? Wb(Wy, ((Wy, Uy) => {
            var hy, fy;
            if (bb) {
              let Wy = bb.toLowerCase(),
                hy = yb[Wy];
              if (hy && void 0 !== hy[Uy]) return hy[Uy]
            }
            let Zy = Object.values(yb).map((yb => {
              let bb = yb[Uy];
              return void 0 !== bb ? bb : 0
            })).sort(((yb, bb) => yb - bb));
            return ((null != (hy = Zy[1]) ? hy : 0) + (null != (fy = Zy[2]) ? fy : 0)) / 2
          })) : {}
        }(fy, yb.graph().align)
    }

    function BW(yb, bb, Wy) {
      var Uy;
      if (!Wy) return !1;
      let hy = null == (Uy = bb.node(yb)) ? void 0 : Uy.edgeObj;
      if (!hy || bb.node(yb).edgeLabel.reversed) return !1;
      let fy = Wy.indexOf(null == hy ? void 0 : hy.v),
        Zy = Wy.indexOf(null == hy ? void 0 : hy.w);
      return -1 !== fy && -1 !== Zy && fy === (Zy + 1) % Wy.length || fy === (Zy - 1) % Wy.length
    }

    function KW(yb, bb) {
      (function(yb) {
        let bb = tb(yb),
          Wy = yb.graph(),
          Uy = Wy.ranksep,
          hy = Wy.rankalign,
          fy = 0;
        bb.forEach((bb => {
          let Wy = bb.reduce(((bb, Wy) => {
            var Uy;
            let hy = null != (Uy = yb.node(Wy).height) ? Uy : 0;
            return bb > hy ? bb : hy
          }), 0);
          bb.forEach((bb => {
            let Uy = yb.node(bb);
            Uy.y = "top" === hy ? fy + Uy.height / 2 : "bottom" === hy ? fy + Wy - Uy.height / 2 : fy + Wy / 2
          })), fy += Wy + Uy
        }))
      })(yb = jb(yb)), Object.entries(oW(yb, bb)).forEach((bb => {
        let [Wy, Uy] = bb;
        return yb.node(Wy).x = Uy
      }))
    }
    var eW = new WeakMap;

    function qU(yb) {
      return SW(yb, xb, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}), yb
    }

    function sW(yb, bb, Wy) {
      let Uy = bb;
      for (; void 0 !== Uy;) {
        let bb = yb.parent(Uy);
        if (bb === Wy) return Uy;
        Uy = bb
      }
    }

    function SW(yb, bb, Wy) {
      var Uy;
      let hy = yb.nodes().filter((bb => yb.children(bb).length)),
        fy = {};
      hy.forEach((Uy => {
        let hy = yb.node(Uy);
        if (hy && hy.rankdir) {
          let Zy = new Ly({
            multigraph: !0,
            compound: !0
          });
          Zy.setGraph({
            rankdir: hy.rankdir
          });
          let cb = yb.children(Uy);
          cb.forEach((bb => {
            let Wy = {
              ...yb.node(bb)
            };
            Zy.setNode(bb, Wy);
            let hy = yb.parent(bb);
            hy && hy !== Uy && cb.includes(hy) && Zy.setParent(bb, hy)
          }));
          let Py = new Set;
          yb.edges().forEach((bb => {
            let Wy = sW(yb, bb.v, Uy),
              hy = sW(yb, bb.w, Uy);
            if (Wy && hy && Wy !== hy) {
              let Uy = `${Wy}\0${hy}`;
              Py.has(Uy) || (Py.add(Uy), Zy.setEdge(Wy, hy, {
                ...yb.edge(bb)
              }))
            }
          })), SW(Zy, bb, Wy);
          let oy = RW(Zy);
          EW(oy, bb, Wy, null), lW(Zy, oy);
          let By = 1 / 0,
            Ky = 1 / 0,
            ey = -1 / 0,
            qb = -1 / 0;
          Zy.nodes().forEach((yb => {
            if (yb === Uy) return;
            let bb = Zy.node(yb);
            bb && "number" == typeof bb.x && "number" == typeof bb.y && "number" == typeof bb.width && "number" == typeof bb.height && (By = Math.min(By, bb.x - bb.width / 2), ey = Math.max(ey, bb.x + bb.width / 2), Ky = Math.min(Ky, bb.y - bb.height / 2), qb = Math.max(qb, bb.y + bb.height / 2))
          })), (!isFinite(By) || !isFinite(Ky) || !isFinite(ey) || !isFinite(qb)) && (By = Ky = 0, ey = qb = 0);
          let sy = ey - By,
            Sy = qb - Ky;
          fy[Uy] = {
            minX: By,
            Xf: Ky,
            maxX: ey,
            nf: qb,
            width: sy,
            height: Sy,
            offsetX: By,
            offsetY: Ky
          }, hy._dagreClusterSubgraph = Zy
        }
      }));
      let Zy = [],
        cb = new Map;
      hy.forEach((bb => {
        let Wy = yb.node(bb);
        Wy && Wy.rankdir && fy[bb] && cb.set(bb, (yb.children(bb) || []).filter((yb => yb !== bb)))
      }));
      let Py = new Set([...cb.values()].flat()),
        oy = new Map;
      cb.forEach(((bb, Wy) => {
        Py.has(Wy) || oy.set(Wy, (bb => {
          let Wy = [],
            Uy = (yb.children(bb) || []).filter((yb => yb !== bb));
          for (; Uy.length > 0;) {
            let bb = Uy.shift();
            Wy.push(bb), (yb.children(bb) || []).filter((yb => yb !== bb)).forEach((yb => Uy.push(yb)))
          }
          return Wy
        })(Wy))
      }));
      let By = new Set([...oy.values()].flat()),
        Ky = yb => {
          for (let [bb, Wy] of oy)
            if (Wy.includes(yb)) return bb;
          return yb
        },
        ey = [];
      yb.edges().forEach((bb => {
        (By.has(bb.v) || By.has(bb.w)) && ey.push({
          edge: bb,
          label: yb.edge(bb)
        })
      }));
      let qb = new Map;
      By.forEach((bb => {
        let Wy = yb.parent(bb);
        qb.set(bb, "string" == typeof Wy ? Wy : void 0)
      })), oy.forEach(((bb, Wy) => {
        let Uy = yb.node(Wy),
          hy = [];
        bb.forEach((bb => {
          let Wy = yb.node(bb);
          Wy && (hy.push({
            id: bb,
            node: Wy,
            parent: qb.get(bb)
          }), yb.removeNode(bb))
        }));
        let cb = ey.filter((yb => {
            let {
              edge: Wy
            } = yb;
            return bb.includes(Wy.v) || bb.includes(Wy.w)
          })),
          Py = fy[Wy];
        Uy && (Zy.push({
          clusterId: Wy,
          subgraph: Uy._dagreClusterSubgraph,
          bounds: Py,
          children: bb,
          removedNodes: hy,
          removedEdges: cb
        }), Uy.width = Py.width, Uy.height = Py.height)
      }));
      let sy = new Set;
      ey.forEach((bb => {
        let {
          edge: Wy,
          label: Uy
        } = bb, hy = Ky(Wy.v), fy = Ky(Wy.w);
        if (hy !== fy && yb.hasNode(hy) && yb.hasNode(fy)) {
          let bb = `${hy}\0${fy}`;
          sy.has(bb) || (sy.add(bb), yb.setEdge(hy, fy, {
            ...Uy,
            width: 0,
            height: 0
          }))
        }
      }));
      let Sy = RW(yb),
        Ey = EW(Sy, bb, Wy, null != (Uy = eW.get(yb)) ? Uy : null);
      eW.set(yb, Ey), lW(yb, Sy), sy.forEach((bb => {
        let Wy = bb.indexOf("\0"),
          Uy = bb.slice(0, Wy),
          hy = bb.slice(Wy + 1);
        yb.hasEdge(Uy, hy) && yb.removeEdge(Uy, hy)
      })), Zy.forEach((bb => {
        let {
          clusterId: Wy,
          subgraph: Uy,
          bounds: hy,
          removedNodes: fy,
          removedEdges: Zy
        } = bb;
        var cb, Py;
        let oy = yb.node(Wy),
          By = null != (cb = null == oy ? void 0 : oy.x) ? cb : 0,
          Ky = null != (Py = null == oy ? void 0 : oy.y) ? Py : 0,
          ey = (hy.minX + hy.maxX) / 2,
          qb = (hy.Xf + hy.nf) / 2;
        fy.forEach((bb => {
          let {
            id: Wy,
            node: Uy,
            parent: hy
          } = bb;
          yb.setNode(Wy, Uy), void 0 !== hy && yb.setParent(Wy, hy)
        })), Zy.forEach((bb => {
          let {
            edge: Wy,
            label: Uy
          } = bb;
          yb.setEdge(Wy, Uy)
        })), Uy.nodes().forEach((bb => {
          if (bb === Wy) return;
          let hy = Uy.node(bb),
            fy = yb.node(bb);
          fy && hy && "number" == typeof hy.x && "number" == typeof hy.y && (fy.x = By + (hy.x - ey), fy.y = Ky + (hy.y - qb))
        })), delete oy._dagreClusterSubgraph
      })), hy.forEach((bb => {
        var Wy, Uy;
        let hy = yb.node(bb),
          Zy = fy[bb];
        if (hy && hy.rankdir && hy._dagreClusterSubgraph && Zy) {
          let fy = hy._dagreClusterSubgraph,
            cb = null != (Wy = hy.x) ? Wy : 0,
            Py = null != (Uy = hy.y) ? Uy : 0,
            oy = (Zy.minX + Zy.maxX) / 2,
            By = (Zy.Xf + Zy.nf) / 2;
          fy.nodes().forEach((Wy => {
            if (Wy === bb) return;
            let Uy = fy.node(Wy),
              hy = yb.node(Wy);
            if (hy && Uy && "number" == typeof Uy.x && "number" == typeof Uy.y) {
              let yb = Uy.x - oy,
                bb = Uy.y - By;
              hy.x = cb + yb, hy.y = Py + bb
            }
          })), delete hy._dagreClusterSubgraph
        }
      }))
    }

    function EW(yb, bb, Wy) {
      let Uy = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
      var hy, fy;
      let Zy = !1 !== (null == Wy ? void 0 : Wy.useDynamic),
        cb = Zy && null != (hy = null == Uy ? void 0 : Uy.graph) ? hy : null,
        Py = Zy && null != (fy = null == Uy ? void 0 : Uy.rawNodes) ? fy : null;
      bb("    makeSpaceForEdgeLabels", (() => function(yb) {
        let bb = yb.graph();
        bb.ranksep /= 2, yb.edges().forEach((Wy => {
          var Uy;
          let hy = yb.edge(Wy);
          hy.minlen *= 2, "c" !== (null != (Uy = hy.labelpos) ? Uy : "r").toLowerCase() && ("TB" === bb.rankdir || "BT" === bb.rankdir ? hy.width += hy.labeloffset : hy.height += hy.labeloffset)
        }))
      }(yb))), bb("    removeSelfEdges", (() => function(yb) {
        yb.edges().forEach((bb => {
          if (bb.v === bb.w) {
            let Wy = yb.node(bb.v);
            Wy.selfEdges || (Wy.selfEdges = []), Wy.selfEdges.push({
              e: bb,
              label: yb.edge(bb)
            }), yb.removeEdge(bb)
          }
        }))
      }(yb))), bb("    acyclic", (() => qW(yb, cb))), bb("    nestingGraph.run", (() => Fb(yb))), bb("    rank", (() => ub(jb(yb)))), bb("    injectEdgeLabelProxies", (() => function(yb) {
        yb.edges().forEach((bb => {
          let Wy = yb.edge(bb);
          if (Wy.width && Wy.height) {
            let Wy = yb.node(bb.v),
              Uy = {
                rank: (yb.node(bb.w).rank - Wy.rank) / 2 + Wy.rank,
                e: bb
              };
            Qy(yb, "edge-proxy", Uy, "_ep")
          }
        }))
      }(yb))), bb("    removeEmptyRanks", (() => function(yb) {
        let bb = yb.nodes().map((bb => yb.node(bb).rank)).filter((yb => void 0 !== yb)),
          Wy = Ny(Math.min, bb),
          Uy = [];
        yb.nodes().forEach((bb => {
          let hy = yb.node(bb).rank - Wy;
          Uy[hy] || (Uy[hy] = []), Uy[hy].push(bb)
        }));
        let hy = 0,
          fy = yb.graph().nodeRankFactor;
        Array.from(Uy).forEach(((bb, Wy) => {
          void 0 === bb && Wy % fy !== 0 ? --hy : void 0 !== bb && hy && bb.forEach((bb => yb.node(bb).rank += hy))
        }))
      }(yb))), bb("    nestingGraph.cleanup", (() => function(yb) {
        let bb = yb.graph();
        yb.removeNode(bb.nestingRoot), delete bb.nestingRoot, yb.edges().forEach((bb => {
          yb.edge(bb).nestingEdge && yb.removeEdge(bb)
        }))
      }(yb))), bb("    normalizeRanks", (() => function(yb) {
        let bb = yb.nodes().map((bb => {
            let Wy = yb.node(bb).rank;
            return void 0 === Wy ? Number.MAX_VALUE : Wy
          })),
          Wy = Ny(Math.min, bb);
        yb.nodes().forEach((bb => {
          let Uy = yb.node(bb);
          Object.hasOwn(Uy, "rank") && (Uy.rank -= Wy)
        }))
      }(yb))), bb("    assignRankMinMax", (() => function(yb) {
        let bb = 0;
        yb.nodes().forEach((Wy => {
          let Uy = yb.node(Wy);
          Uy.borderTop && (Uy.minRank = yb.node(Uy.borderTop).rank, Uy.maxRank = yb.node(Uy.borderBottom).rank, bb = Math.max(bb, Uy.maxRank))
        })), yb.graph().maxRank = bb
      }(yb))), bb("    removeEdgeLabelProxies", (() => function(yb) {
        yb.nodes().forEach((bb => {
          let Wy = yb.node(bb);
          if ("edge-proxy" === Wy.dummy) {
            let Uy = Wy;
            yb.edge(Uy.e).labelRank = Wy.rank, yb.removeNode(bb)
          }
        }))
      }(yb))), bb("    normalize.run", (() => sb(yb))), bb("    parentDummyChains", (() => aW(yb))), bb("    addBorderSegments", (() => Lb(yb))), bb("    order", (() => WW(yb, Wy, Py))), bb("    insertSelfEdges", (() => function(yb) {
        tb(yb).forEach((bb => {
          let Wy = 0;
          bb.forEach(((bb, Uy) => {
            let hy = yb.node(bb);
            "number" != typeof hy.rank && (hy.rank = 0), hy.order = Uy + Wy, (hy.selfEdges || []).forEach((bb => {
              Qy(yb, "selfedge", {
                width: bb.label.width,
                height: bb.label.height,
                rank: hy.rank,
                order: Uy + ++Wy,
                e: bb.e,
                edgeLabel: bb.label
              }, "_se"), (!Array.isArray(bb.label.points) || 7 !== bb.label.points.length) && (bb.label.points = [{
                x: 0,
                y: -10
              }, {
                x: 0,
                y: -10
              }, {
                x: 0,
                y: 0
              }, {
                x: 0,
                y: 10
              }, {
                x: 0,
                y: 10
              }, {
                x: 0,
                y: 0
              }, {
                x: 0,
                y: 0
              }])
            })), delete hy.selfEdges
          }))
        }))
      }(yb))), bb("    adjustCoordinateSystem", (() => function(yb) {
        var bb;
        let Wy = null == (bb = yb.graph().rankdir) ? void 0 : bb.toLowerCase();
        ("lr" === Wy || "rl" === Wy) && Db(yb)
      }(yb))), bb("    position", (() => KW(yb, Wy.corePath))), bb("    positionSelfEdges", (() => function(yb) {
        yb.nodes().forEach((bb => {
          let Wy = yb.node(bb),
            Uy = yb => "number" == typeof yb && isFinite(yb);
          if ("selfedge" === Wy.dummy) {
            let hy = Wy,
              fy = yb.node(hy.e.v),
              Zy = Uy(null == fy ? void 0 : fy.x) ? fy.x : 0,
              cb = Uy(null == fy ? void 0 : fy.y) ? fy.y : 0,
              Py = Uy(null == fy ? void 0 : fy.width) ? fy.width : 0,
              oy = Uy(null == fy ? void 0 : fy.height) ? fy.height : 0,
              By = Uy(Wy.x) ? Wy.x : Zy,
              Ky = Uy(Wy.y) ? Wy.y : cb,
              ey = Py / 2,
              qb = oy / 2;
            hy.edgeLabel.points = [{
              x: By + ey,
              y: Ky - qb
            }, {
              x: By + ey,
              y: Ky - qb
            }, {
              x: By,
              y: Ky
            }, {
              x: By - ey,
              y: Ky + qb
            }, {
              x: By - ey,
              y: Ky + qb
            }, {
              x: By,
              y: Ky
            }, {
              x: By,
              y: Ky
            }], hy.edgeLabel.x = By, hy.edgeLabel.y = Ky, yb.setEdge(hy.e, hy.edgeLabel), yb.removeNode(bb)
          } else Wy && Array.isArray(Wy.selfEdges) && Wy.selfEdges.forEach((yb => {
            if (!Array.isArray(yb.label.points) || 7 !== yb.label.points.length) {
              let bb = Uy(Wy.x) ? Wy.x : 0,
                hy = Uy(Wy.y) ? Wy.y : 0,
                fy = (Uy(Wy.width) ? Wy.width : 0) / 2,
                Zy = (Uy(Wy.height) ? Wy.height : 0) / 2;
              yb.label.points = [{
                x: bb + fy,
                y: hy - Zy
              }, {
                x: bb + fy,
                y: hy - Zy
              }, {
                x: bb,
                y: hy
              }, {
                x: bb - fy,
                y: hy + Zy
              }, {
                x: bb - fy,
                y: hy + Zy
              }, {
                x: bb,
                y: hy
              }, {
                x: bb,
                y: hy
              }]
            }
          }))
        }))
      }(yb)));
      let oy = JSON.parse(JSON.stringify(yb._nodes));
      return bb("    removeBorderNodes", (() => function(yb) {
        yb.nodes().forEach((bb => {
          if (yb.children(bb).length) {
            let Wy = yb.node(bb),
              Uy = yb.node(Wy.borderTop),
              hy = yb.node(Wy.borderBottom),
              fy = yb.node(Wy.borderLeft[Wy.borderLeft.length - 1]),
              Zy = yb.node(Wy.borderRight[Wy.borderRight.length - 1]);
            Wy.width = Math.abs(Zy.x - fy.x), Wy.height = Math.abs(hy.y - Uy.y), Wy.x = fy.x + Wy.width / 2, Wy.y = Uy.y + Wy.height / 2
          }
        })), yb.nodes().forEach((bb => {
          "border" === yb.node(bb).dummy && yb.removeNode(bb)
        }))
      }(yb))), bb("    normalize.undo", (() => function(yb) {
        yb.graph().dummyChains.forEach((bb => {
          let Wy, Uy = yb.node(bb),
            hy = Uy.edgeLabel;
          for (yb.setEdge(Uy.edgeObj, hy); Uy.dummy;) Wy = yb.successors(bb)[0], yb.removeNode(bb), hy.points.push({
            x: Uy.x,
            y: Uy.y
          }), "edge-label" === Uy.dummy && (hy.x = Uy.x, hy.y = Uy.y, hy.width = Uy.width, hy.height = Uy.height), bb = Wy, Uy = yb.node(bb)
        }))
      }(yb))), bb("    fixupEdgeLabelCoords", (() => function(yb) {
        yb.edges().forEach((bb => {
          let Wy = yb.edge(bb);
          if (Object.hasOwn(Wy, "x")) switch (("l" === Wy.labelpos || "r" === Wy.labelpos) && (Wy.width -= Wy.labeloffset), Wy.labelpos) {
            case "l":
              Wy.x -= Wy.width / 2 + Wy.labeloffset;
              break;
            case "r":
              Wy.x += Wy.width / 2 + Wy.labeloffset
          }
        }))
      }(yb))), bb("    undoCoordinateSystem", (() => jW(yb))), bb("    translateGraph", (() => function(yb) {
        let bb = Number.POSITIVE_INFINITY,
          Wy = 0,
          Uy = Number.POSITIVE_INFINITY,
          hy = 0,
          fy = yb.graph(),
          Zy = fy.marginx || 0,
          cb = fy.marginy || 0;

        function Py(yb) {
          let fy = yb.x,
            Zy = yb.y,
            cb = yb.width,
            Py = yb.height;
          bb = Math.min(bb, fy - cb / 2), Wy = Math.max(Wy, fy + cb / 2), Uy = Math.min(Uy, Zy - Py / 2), hy = Math.max(hy, Zy + Py / 2)
        }
        yb.nodes().forEach((bb => Py(yb.node(bb)))), yb.edges().forEach((bb => {
          let Wy = yb.edge(bb);
          Object.hasOwn(Wy, "x") && Py(Wy)
        })), bb -= Zy, Uy -= cb, yb.nodes().forEach((Wy => {
          let hy = yb.node(Wy);
          hy.x -= bb, hy.y -= Uy
        })), yb.edges().forEach((Wy => {
          let hy = yb.edge(Wy);
          hy.points.forEach((yb => {
            yb.x -= bb, yb.y -= Uy
          })), Object.hasOwn(hy, "x") && (hy.x -= bb), Object.hasOwn(hy, "y") && (hy.y -= Uy)
        })), fy.width = Wy - bb + Zy, fy.height = hy - Uy + cb
      }(yb))), bb("    assignNodeIntersects", (() => function(yb) {
        yb.edges().forEach((bb => {
          if (bb.v === bb.w) return;
          let Wy, Uy, hy = yb.edge(bb),
            fy = yb.node(bb.v),
            Zy = yb.node(bb.w);
          hy.points ? (Wy = hy.points[0], Uy = hy.points[hy.points.length - 1]) : (hy.points = [], Wy = Zy, Uy = fy), hy.points.unshift(Dy(fy, Wy)), hy.points.push(Dy(Zy, Uy))
        }))
      }(yb))), bb("    reversePoints", (() => function(yb) {
        yb.edges().forEach((bb => {
          let Wy = yb.edge(bb);
          Wy.reversed && Wy.points.reverse()
        }))
      }(yb))), bb("    acyclic.undo", (() => function(yb) {
        yb.edges().forEach((bb => {
          let Wy = yb.edge(bb);
          if (Wy.reversed) {
            yb.removeEdge(bb);
            let Uy = Wy.forwardName;
            delete Wy.reversed, delete Wy.forwardName, yb.setEdge(bb.w, bb.v, Wy, Uy)
          }
        }))
      }(yb))), {
        graph: yb,
        rawNodes: oy
      }
    }

    function lW(yb, bb) {
      yb.nodes().forEach((Wy => {
        let Uy = yb.node(Wy),
          hy = bb.node(Wy);
        Uy && (Uy.x = hy.x, Uy.y = hy.y, Uy.order = hy.order, Uy.rank = hy.rank, bb.children(Wy).length && (Uy.width = hy.width, Uy.height = hy.height))
      })), yb.edges().forEach((Wy => {
        let Uy = yb.edge(Wy),
          hy = bb.edge(Wy);
        Uy.points = hy.points, Object.hasOwn(hy, "x") && (Uy.x = hy.x, Uy.y = hy.y)
      })), yb.graph().width = bb.graph().width, yb.graph().height = bb.graph().height
    }
    var mU = ["nodesep", "edgesep", "ranksep", "marginx", "marginy"],
      CW = {
        ranksep: 50,
        edgesep: 20,
        nodesep: 50,
        rankdir: "TB",
        rankalign: "center"
      },
      TW = ["acyclicer", "ranker", "rankdir", "align", "rankalign"],
      VW = ["width", "height", "rank"],
      JW = {
        width: 0,
        height: 0
      },
      gU = ["minlen", "weight", "width", "height", "labeloffset"],
      GW = {
        minlen: 1,
        weight: 1,
        width: 0,
        height: 0,
        labeloffset: 10,
        labelpos: "r"
      },
      OW = ["labelpos"];

    function RW(yb) {
      let bb = new Ly({
          multigraph: !0,
          compound: !0
        }),
        Wy = iU(yb.graph());
      return bb.setGraph(Object.assign({}, CW, vU(Wy, mU), bW(Wy, TW))), yb.nodes().forEach((Wy => {
        let Uy = vU(iU(yb.node(Wy)), VW);
        Object.keys(JW).forEach((yb => {
          void 0 === Uy[yb] && (Uy[yb] = JW[yb])
        })), bb.setNode(Wy, Uy);
        let hy = yb.parent(Wy);
        void 0 !== hy && bb.setParent(Wy, hy)
      })), yb.edges().forEach((Wy => {
        let Uy = iU(yb.edge(Wy));
        bb.setEdge(Wy, Object.assign({}, GW, vU(Uy, gU), bW(Uy, OW)))
      })), bb
    }

    function vU(yb, bb) {
      return Wb(bW(yb, bb), Number)
    }

    function iU(yb) {
      let bb = {};
      return yb && Object.entries(yb).forEach((yb => {
        let [Wy, Uy] = yb;
        "string" == typeof Wy && (Wy = Wy.toLowerCase()), bb[Wy] = Uy
      })), bb
    }

    function MW(yb) {
      let bb = tb(yb),
        Wy = new Ly({
          compound: !0,
          multigraph: !0
        }).setGraph({});
      return yb.nodes().forEach((bb => {
        Wy.setNode(bb, {
          label: bb
        }), Wy.setParent(bb, "layer" + yb.node(bb).rank)
      })), yb.edges().forEach((yb => Wy.setEdge(yb.v, yb.w, {}, yb.name))), bb.forEach(((yb, bb) => {
        let Uy = "layer" + bb;
        Wy.setNode(Uy, {
          rank: "same"
        }), yb.reduce(((yb, bb) => (Wy.setEdge(yb, bb, {
          style: "invis"
        }), bb)))
      })), Wy
    }
    var YW = {
        time: Iy,
        notime: xb
      },
      XW = {
        graphlib: fy,
        version: fb,
        layout: qU,
        debug: MW,
        util: {
          time: Iy,
          notime: xb
        }
      }
  }
};
Object.freeze(modules);
for (const yb in modules) Object.freeze(modules[yb]);