export const id = 238;
export const ids = [238];
export const modules = {
  53949: (dd, Od, md) => {
    md.r(Od), md.d(Od, {
      loadGlbAsset: () => BO,
      loadGlbTree: () => xO
    });
    var Wd = md(39461),
      Fd = md(151),
      Rd = md(1262);

    function Xd(dd) {
      return (0, Fd.isDiscordClient)() ? `https://${Rd.b.discordDomain}/${dd.href}` : dd.href
    }
    const Kd = {
      scriptUrl: Xd(new md.U(md(53952))),
      wasmBinaryUrl: Xd(new md.U(md(53960)))
    };
    var hd = md(2425),
      vd = md(37635),
      Qd = md.n(vd);

    function td() {
      return Qd()('(()=>{class dd extends Error{}function Od(Od,md){const Wd=Od._malloc(md);if(0===Wd)throw new dd(`Draco: the decoder\'s heap refused ${md} bytes`);return Wd}function md(md,Wd,Fd,Rd){let Xd=null,Kd=null,hd=null;try{Xd=new md.Decoder,Kd=new md.DecoderBuffer,Kd.Init(Wd,Wd.byteLength);let vd=0;const Qd=Xd.GetEncodedGeometryType(Kd);if(Qd===md.TRIANGULAR_MESH){const Od=new md.Mesh;hd=Od;const Wd=Xd.DecodeBufferToMesh(Kd,Od);if(!Wd.ok()||0===Od.ptr)throw new dd(Wd.error_msg());vd=3*Od.num_faces()}else{if(Qd!==md.POINT_CLOUD)throw new dd(`Draco: Cannot decode invalid geometry type ${Qd}`);{const Od=new md.PointCloud;hd=Od;const Wd=Xd.DecodeBufferToPointCloud(Kd,Od);if(!Wd.ok()||!Od.ptr)throw new dd(Wd.error_msg())}}const td=hd.num_points();if(td!==Rd.vertices||vd!==Rd.indices)throw new dd(`Draco: decoded ${td} vertices and ${vd} indices, the accessors declare ${Rd.vertices} and ${Rd.indices}`);const od=function(dd){return{[dd.DT_FLOAT32]:Float32Array,[dd.DT_INT8]:Int8Array,[dd.DT_INT16]:Int16Array,[dd.DT_INT32]:Int32Array,[dd.DT_UINT8]:Uint8Array,[dd.DT_UINT16]:Uint16Array,[dd.DT_UINT32]:Uint32Array}}(md),Nd=[];for(const Od of Object.keys(Fd)){const md=Fd[Od],Wd=Rd.components[Od],Kd=Xd.GetAttributeByUniqueId(hd,md);if(!Kd||0===Kd.ptr)throw new dd(`Draco: no attribute with id ${md} (${Od})`);const vd=Kd.data_type();if(!od[vd])throw new dd(`Draco: Cannot decode invalid data type ${vd}`);if(Kd.num_components()!==Wd)throw new dd(`Draco: ${Od} decodes to ${Kd.num_components()} components, its accessor declares ${Wd}`);Nd.push([Od,Kd,od[vd]])}let qd=null;if(Qd===md.TRIANGULAR_MESH){const dd=4*vd,Wd=Od(md,dd);try{Xd.GetTrianglesUInt32Array(hd,dd,Wd),qd=new Uint32Array(vd),qd.set(new Uint32Array(md.HEAPF32.buffer,Wd,vd))}finally{md._free(Wd)}}const Hd=[];for(const[dd,Wd,Fd]of Nd){const Rd=Wd.num_components(),Kd=td*Rd,vd=Kd*Fd.BYTES_PER_ELEMENT,Qd=Od(md,vd);try{Xd.GetAttributeDataArrayForAllPoints(hd,Wd,Wd.data_type(),vd,Qd),Hd.push({kind:dd,data:new Fd(md.HEAPF32.buffer,Qd,Kd).slice(),size:Rd,byteOffset:Wd.byte_offset(),byteStride:Wd.byte_stride(),normalized:Wd.normalized()})}finally{md._free(Qd)}}return{indices:qd,attributes:Hd,totalVertices:td}}finally{hd&&md.destroy(hd),Kd&&md.destroy(Kd),Xd&&md.destroy(Xd)}}const Wd=self;let Fd=null;self.onmessage=dd=>{let{data:Od}=dd;if("init"===Od.id){try{importScripts(Od.url),Fd=DracoDecoderModule({wasmBinary:Od.wasmBinary}),Wd.postMessage({id:"initDone"})}catch(vd){Wd.postMessage({id:"initError",message:vd instanceof Error?vd.message:String(vd)})}return}const{seq:Rd,data:Xd,attributeIds:Kd,expected:hd}=Od;Fd?Fd.then((dd=>{try{const Od=md(dd,Xd,Kd,hd),Fd=Od.attributes.map((dd=>dd.data.buffer));Od.indices&&Fd.push(Od.indices.buffer),Wd.postMessage({id:"decoded",seq:Rd,...Od},Fd)}catch(vd){Wd.postMessage({id:"decodeError",seq:Rd,message:vd instanceof Error?vd.message:String(vd)})}}),(dd=>{Wd.postMessage({id:"decodeError",seq:Rd,message:dd instanceof Error?dd.message:String(dd)})})):Wd.postMessage({id:"decodeError",seq:Rd,message:"Draco: the decoder module is not loaded"})}})();', "Worker", void 0, md.p + "dracoDecode.worker.c7805245.worker.js")
    }
    var od = md(107),
      Nd = md(5055),
      qd = md(364);
    const Hd = 2;
    const yd = 1e3;
    let bd = null,
      Td = null;
    const pd = [],
      Yd = [];
    let gd = 0;
    const wd = {
      decodes: 0,
      workersStarted: 0,
      mostWorkers: 0
    };
    let Ed = null;

    function Jd() {
      if (!bd) return Promise.reject(new Error("Draco: configureDracoPool was not called"));
      const {
        scriptUrl: dd,
        wasmBinaryUrl: Od
      } = bd;
      return Td ??= (0, hd.J)(Od), Td.catch((() => {
        Td = null
      })), wd.workersStarted++, Promise.all([Td, (0, qd.p)()]).then((Od => {
        let [md] = Od;
        return new Promise(((Od, Wd) => {
          const Fd = new td;
          Fd.onerror = dd => {
            Fd.onmessage = null, Fd.onerror = null, Fd.terminate(), Wd(new Error("Draco: the decode worker failed to start" + (dd.message ? `: ${dd.message}` : " (its script did not load)")))
          }, Fd.onmessage = dd => {
            let {
              data: md
            } = dd;
            Fd.onmessage = null, Fd.onerror = null, "initDone" === md.id ? Od(Fd) : (Fd.terminate(), Wd(new Error(`Draco: ${"initError"===md.id?md.message:"the worker did not start"}`)))
          };
          const Rd = md.slice().buffer,
            Xd = {
              id: "init",
              url: dd,
              wasmBinary: Rd
            };
          Fd.postMessage(Xd, [Rd])
        }))
      }))
    }

    function Ud(dd) {
      const Od = pd.indexOf(dd); - 1 !== Od && pd.splice(Od, 1);
      const md = Yd.shift();
      md && Bd(md)
    }

    function xd(dd, Od) {
      dd.busy = !0, dd.releaseTimer && (clearTimeout(dd.releaseTimer), dd.releaseTimer = null);
      dd.worker.then((md => {
        const Wd = gd++;
        md.onmessage = Fd => {
          let {
            data: Rd
          } = Fd;
          if (("decoded" === Rd.id || "decodeError" === Rd.id) && Rd.seq === Wd) {
            if (md.onmessage = null, md.onerror = null, "decoded" === Rd.id) return wd.decodes++, Od.resolve({
              indices: Rd.indices,
              attributes: Rd.attributes,
              totalVertices: Rd.totalVertices
            }), void(() => {
              const Od = Yd.shift();
              Od ? xd(dd, Od) : (dd.busy = !1, dd.releaseTimer = setTimeout((() => {
                const Od = pd.indexOf(dd); - 1 !== Od && pd.splice(Od, 1), dd.worker.then((dd => {
                  dd.terminate()
                }))
              }), yd))
            })();
            md.terminate(), Od.reject(new Error(Rd.message)), Ud(dd)
          }
        }, md.onerror = Wd => {
          md.onmessage = null, md.onerror = null, md.terminate(), Od.reject(new Error(`Draco: the decode worker failed: ${Wd.message}`)), Ud(dd)
        };
        const Fd = {
          id: "decode",
          seq: Wd,
          data: Od.data,
          attributeIds: Od.attributeIds,
          expected: Od.expected
        };
        md.postMessage(Fd, [Od.data.buffer])
      }), (md => {
        Od.reject(md instanceof Error ? md : new Error(String(md))), Ud(dd)
      }))
    }

    function Bd(dd) {
      const Od = pd.find((dd => !dd.busy));
      if (Od) xd(Od, dd);
      else {
        if (Ed ??= (0, Nd.e)() ? 1 : function(dd, Od) {
            const md = dd ? Math.max(1, Math.min(Math.floor(.5 * dd), 4)) : 1;
            return Od ? Math.min(md, Hd) : md
          }("object" === typeof navigator ? navigator.hardwareConcurrency : void 0, (0, od.isMobile)()), pd.length < Ed) {
          const Od = {
            worker: Jd(),
            busy: !0,
            releaseTimer: null
          };
          return pd.push(Od), wd.mostWorkers = Math.max(wd.mostWorkers, pd.length), void xd(Od, dd)
        }
        Yd.push(dd)
      }
    }

    function Sd(dd, Od, md) {
      return new Promise(((Wd, Fd) => {
        Bd({
          data: new Int8Array(dd.buffer, dd.byteOffset, dd.byteLength).slice(),
          attributeIds: Od,
          expected: md,
          resolve: Wd,
          reject: Fd
        })
      }))
    }
    var sd = md(38922),
      ud = md(38929),
      Vd = md(35662),
      Ad = md(35653);
    const rd = {
      index: -1,
      magFilter: void 0,
      minFilter: void 0,
      wrapS: void 0,
      wrapT: void 0
    };

    function Gd(dd) {
      const Od = (0, Ad.k)(dd.byteLength);
      if (Od) throw new Vd.j(Od);
      const {
        json: md,
        bin: Wd
      } = (0, Vd.v)(dd), Fd = (0, Ad.i)(md, Wd);
      if (Fd) throw new Vd.j(Fd);
      try {
        return function(dd, Od) {
          var md, Wd, Fd, Rd, Xd, Kd, hd, vd, Qd, td, od, Nd, qd, Hd, yd;
          const bd = new Map,
            Td = md => {
              let Wd = bd.get(md);
              if (!Wd) {
                var Fd;
                const Rd = dd.bufferViews[md],
                  Xd = null !== (Fd = Rd.byteOffset) && void 0 !== Fd ? Fd : 0;
                Wd = {
                  index: md,
                  bytes: Od.subarray(Xd, Xd + Rd.byteLength),
                  byteStride: Rd.byteStride
                }, bd.set(md, Wd)
              }
              return Wd
            },
            pd = new Map,
            Yd = Od => {
              let md = pd.get(Od);
              if (!md) {
                var Wd;
                const Fd = dd.accessors[Od];
                md = {
                  index: Od,
                  count: Fd.count,
                  type: Fd.type,
                  numComponents: Vd.m[Fd.type],
                  componentType: Fd.componentType,
                  normalized: null !== (Wd = Fd.normalized) && void 0 !== Wd && Wd,
                  byteOffset: Fd.byteOffset,
                  bufferView: void 0 === Fd.bufferView ? null : Td(Fd.bufferView),
                  min: Fd.min,
                  max: Fd.max
                }, pd.set(Od, md)
              }
              return md
            },
            gd = null !== (md = null === (Wd = dd.extensionsUsed) || void 0 === Wd ? void 0 : Wd.includes("KHR_draco_mesh_compression")) && void 0 !== md && md,
            wd = (null !== (Fd = dd.meshes) && void 0 !== Fd ? Fd : []).map(((Od, md) => {
              const Wd = Od.primitives.map(((Od, md) => {
                var Wd, Fd, Rd;
                const Xd = gd ? null === (Wd = Od.extensions) || void 0 === Wd ? void 0 : Wd.KHR_draco_mesh_compression : void 0;
                let Kd = null;
                const hd = [];
                if (Xd) {
                  const md = {
                    vertices: dd.accessors[Od.attributes.POSITION].count,
                    indices: void 0 === Od.indices ? 0 : dd.accessors[Od.indices].count,
                    components: {}
                  };
                  Kd = {
                    bufferView: Td(Xd.bufferView),
                    attributeIds: {},
                    normalized: {},
                    expected: md
                  };
                  for (const [Wd, Fd] of Vd.g) {
                    const Rd = Xd.attributes[Wd];
                    if (void 0 === Rd) continue;
                    Kd.attributeIds[Fd] = Rd;
                    const hd = Od.attributes[Wd];
                    var vd;
                    if (void 0 !== hd) Kd.normalized[Fd] = null !== (vd = dd.accessors[hd].normalized) && void 0 !== vd && vd, md.components[Fd] = Vd.m[dd.accessors[hd].type]
                  }
                } else
                  for (const [dd, Qd] of Vd.g) {
                    const md = Od.attributes[dd];
                    void 0 !== md && hd.push({
                      semantic: dd,
                      kind: Qd,
                      accessor: Yd(md)
                    })
                  }
                return {
                  index: md,
                  mode: null !== (Fd = Od.mode) && void 0 !== Fd ? Fd : 4,
                  attributes: hd,
                  indices: Xd || void 0 === Od.indices ? null : Yd(Od.indices),
                  position: void 0 === Od.attributes.POSITION ? null : Yd(Od.attributes.POSITION),
                  material: null !== (Rd = Od.material) && void 0 !== Rd ? Rd : null,
                  draco: Kd
                }
              }));
              return {
                index: md,
                name: Od.name,
                primitives: Wd,
                extras: Od.extras
              }
            })),
            Ed = (null !== (Rd = dd.nodes) && void 0 !== Rd ? Rd : []).map(((dd, Od) => {
              var md, Wd;
              return {
                index: Od,
                name: dd.name,
                children: null !== (md = dd.children) && void 0 !== md ? md : [],
                mesh: null !== (Wd = dd.mesh) && void 0 !== Wd ? Wd : null,
                translation: dd.translation,
                rotation: dd.rotation,
                scale: dd.scale,
                hasCamera: void 0 !== dd.camera,
                extras: dd.extras
              }
            })),
            Jd = null !== (Xd = null === (Kd = dd.extensionsUsed) || void 0 === Kd ? void 0 : Kd.includes("KHR_materials_unlit")) && void 0 !== Xd && Xd,
            Ud = null !== (hd = null === (vd = dd.extensionsUsed) || void 0 === vd ? void 0 : vd.includes("KHR_texture_transform")) && void 0 !== hd && hd,
            xd = (null !== (Qd = dd.materials) && void 0 !== Qd ? Qd : []).map(((dd, Od) => {
              var md, Wd, Fd, Rd;
              const Xd = dd.pbrMetallicRoughness,
                Kd = null === Xd || void 0 === Xd ? void 0 : Xd.baseColorTexture;
              return {
                index: Od,
                name: dd.name,
                extras: dd.extras,
                unlit: Jd && void 0 !== (null === (md = dd.extensions) || void 0 === md ? void 0 : md.KHR_materials_unlit),
                pbr: Xd ? {
                  baseColorFactor: Xd.baseColorFactor,
                  metallicFactor: Xd.metallicFactor,
                  roughnessFactor: Xd.roughnessFactor
                } : null,
                baseColorTexture: Kd ? {
                  texture: Kd.index,
                  transform: Ud && (null === (Wd = Kd.extensions) || void 0 === Wd ? void 0 : Wd.KHR_texture_transform) || null
                } : null,
                emissiveFactor: dd.emissiveFactor,
                alphaMode: null !== (Fd = dd.alphaMode) && void 0 !== Fd ? Fd : "OPAQUE",
                alphaCutoff: dd.alphaCutoff,
                doubleSided: null !== (Rd = dd.doubleSided) && void 0 !== Rd && Rd
              }
            })),
            Bd = (null !== (td = dd.textures) && void 0 !== td ? td : []).map(((Od, md) => {
              var Wd, Fd;
              const Rd = void 0 === Od.sampler ? rd : {
                index: Od.sampler,
                ...null === (Wd = dd.samplers) || void 0 === Wd ? void 0 : Wd[Od.sampler]
              };
              return {
                index: md,
                sampler: {
                  index: Rd.index,
                  magFilter: Rd.magFilter,
                  minFilter: Rd.minFilter,
                  wrapS: Rd.wrapS,
                  wrapT: Rd.wrapT
                },
                image: null !== (Fd = Od.source) && void 0 !== Fd ? Fd : -1
              }
            })),
            Sd = (null !== (od = dd.images) && void 0 !== od ? od : []).map(((dd, Od) => ({
              index: Od,
              name: dd.name,
              mimeType: dd.mimeType,
              bufferView: Td(dd.bufferView)
            }))),
            sd = null !== (Nd = (0, Vd.u)(dd)) && void 0 !== Nd ? Nd : 0;
          return {
            json: dd,
            rootNodes: null !== (qd = null === (Hd = dd.scenes) || void 0 === Hd || null === (yd = Hd[sd]) || void 0 === yd ? void 0 : yd.nodes) && void 0 !== qd ? qd : [],
            nodes: Ed,
            meshes: wd,
            materials: xd,
            textures: Bd,
            images: Sd
          }
        }(md, Wd)
      } catch (Rd) {
        throw Rd instanceof Vd.i ? Rd : new Vd.i(`reading the GLB failed: ${Rd instanceof Error?Rd.message:String(Rd)}`)
      }
    }
    async function nd(dd, Od) {
      var md, Wd;
      const Fd = dd.draco;
      if (!Fd) throw new Vd.i("not a Draco primitive");
      let Rd;
      try {
        Rd = await Od(Fd.bufferView.bytes, Fd.attributeIds, Fd.expected)
      } catch (vd) {
        throw new Vd.i(`Draco decoding failed: ${vd instanceof Error?vd.message:String(vd)}`)
      }
      const {
        vertices: Xd,
        indices: Kd,
        components: hd
      } = Fd.expected;
      if (Rd.totalVertices !== Xd || (null !== (md = null === (Wd = Rd.indices) || void 0 === Wd ? void 0 : Wd.length) && void 0 !== md ? md : 0) !== Kd || Rd.attributes.some((dd => dd.size !== hd[dd.kind] || dd.data.length !== Xd * dd.size))) throw new Vd.i("Draco decoding gave other counts than the accessors declare");
      for (const Qd of Rd.attributes) {
        const dd = Fd.normalized[Qd.kind];
        void 0 !== dd && (Qd.normalized = dd)
      }
      return Rd
    }
    const Ld = new WeakMap;

    function Pd(dd, Od) {
      var md;
      const Wd = null !== (md = Ld.get(dd)) && void 0 !== md ? md : Od(dd);
      return Ld.set(dd, Wd), Wd
    }

    function zd(dd) {
      const Od = dd.bufferView,
        md = 5125 === dd.componentType ? Uint32Array : Uint16Array,
        Wd = Od.bytes.buffer,
        Fd = Od.bytes.byteOffset + (dd.byteOffset || 0);
      return Fd % md.BYTES_PER_ELEMENT !== 0 ? new md(Wd.slice(Fd, Fd + dd.count * md.BYTES_PER_ELEMENT), 0) : new md(Wd, Fd, dd.count)
    }

    function cd(dd, Od) {
      if (dd.min && dd.max) return [new Float64Array(dd.min), new Float64Array(dd.max)];
      const md = Od.find((dd => {
          let {
            kind: Od
          } = dd;
          return "position" === Od
        })),
        Wd = md ? (0, ud.j)(md, dd.count) : new Float32Array(0);
      return (0, ud.s)(Wd.length / 3, ((dd, Od) => Wd[3 * dd + Od]))
    }

    function jd(dd) {
      const Od = dd.attributes.map((dd => {
          var Od, md;
          let {
            kind: Wd,
            accessor: Fd
          } = dd;
          const {
            bufferView: Rd,
            numComponents: Xd
          } = Fd;
          if (!Rd) {
            return {
              kind: Wd,
              data: Pd(Fd, (() => new Float32Array(Xd * Fd.count))),
              offset: 0,
              stride: 4 * Xd,
              components: Xd,
              glType: 5126,
              isNormalized: !1
            }
          }
          const Kd = null !== (Od = Rd.byteStride) && void 0 !== Od ? Od : Xd * Vd.c[Fd.componentType];
          return {
            kind: Wd,
            data: Rd.bytes,
            offset: null !== (md = Fd.byteOffset) && void 0 !== md ? md : 0,
            stride: Kd,
            components: Xd,
            glType: Fd.componentType,
            isNormalized: Fd.normalized
          }
        })),
        md = dd.indices,
        Wd = md && Pd(md, zd),
        Fd = dd.position;
      return new ud.i(Od, Wd, Fd.count, ...cd(Fd, Od))
    }
    const Dd = [Int8Array, Uint8Array, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array];

    function ed(dd, Od) {
      const md = Od.attributes.map((dd => {
        let {
          kind: Od,
          data: md,
          size: Wd,
          byteOffset: Fd,
          byteStride: Rd,
          normalized: Xd
        } = dd;
        return {
          kind: Od,
          data: md,
          offset: Fd,
          stride: Rd,
          components: Wd,
          glType: 5120 + Dd.indexOf(md.constructor),
          isNormalized: Xd
        }
      }));
      return new ud.i(md, Od.indices, Od.totalVertices, ...cd(dd.position, md))
    }

    function Id(dd) {
      const Od = dd.lastIndexOf("/");
      return Od < 0 ? dd : dd.substring(Od + 1)
    }

    function ld(dd) {
      const Od = dd.lastIndexOf("/");
      return Od < 0 ? "" : dd.substring(0, Od + 1)
    }

    function Cd(dd) {
      return dd.name || `node${dd.index}`
    }
    const Zd = {
        rotation: [0, 1, 0, 0],
        scale: [1, 1, -1]
      },
      kd = {
        9728: 12,
        9729: 2,
        9984: 9,
        9985: 11,
        9986: 10
      },
      fd = {
        9728: 1,
        9729: 7,
        9984: 4,
        9985: 5,
        9986: 8,
        9987: 6
      };

    function Md(dd) {
      var Od, md, Wd, Fd;
      const Rd = null !== (Od = dd.minFilter) && void 0 !== Od ? Od : 9987;
      return 9729 === (null !== (md = dd.magFilter) && void 0 !== md ? md : 9729) ? null !== (Wd = kd[Rd]) && void 0 !== Wd ? Wd : 3 : null !== (Fd = fd[Rd]) && void 0 !== Fd ? Fd : 4
    }
    const dO = {
      33071: 0,
      33648: 2
    };

    function OO(dd) {
      var Od;
      return null !== (Od = dO[null !== dd && void 0 !== dd ? dd : 10497]) && void 0 !== Od ? Od : 1
    }

    function mO(dd) {
      return 9728 === dd.minFilter || 9729 === dd.minFilter
    }

    function WO(dd) {
      var Od, md, Wd;
      const Fd = Float64Array.from(null !== (Od = dd.scale) && void 0 !== Od ? Od : [1, 1, 1]);
      return dd.hasCamera && (Fd[0] = -1), {
        translation: Float64Array.from(null !== (md = dd.translation) && void 0 !== md ? md : [0, 0, 0]),
        rotation: Float64Array.from(null !== (Wd = dd.rotation) && void 0 !== Wd ? Wd : [0, 0, 0, 1]),
        scale: Fd
      }
    }

    function FO(dd, Od) {
      let {
        translation: md,
        rotation: Wd,
        scale: Fd
      } = dd;
      const Rd = new Float32Array(16);
      return (0, sd.e)(Fd, 0, Wd, 0, md, 0, Rd), Od && (0, sd.q)(Rd, Od, 0, Rd), Rd
    }
    class RO {
      constructor(dd, Od, md, Wd) {
        this.model = dd, this.decode = Od, this.fileInfo = md, this.uniqueRootUrl = Wd, this.primitives = void 0, this.parents = new Map, this.uses = new Map, this.own = new Map;
        const Fd = new Set,
          Rd = (Od, md) => {
            const Wd = dd.nodes[Od];
            if (this.parents.has(Wd)) throw new Vd.i(`/nodes/${Od}: Invalid recursive node hierarchy`);
            this.parents.set(Wd, md);
            const Xd = null === Wd.mesh ? [] : dd.meshes[Wd.mesh].primitives,
              Kd = Xd.map((dd => {
                const Od = Xd.length > 1;
                return {
                  name: Od ? `${Cd(Wd)}_primitive${dd.index}` : Cd(Wd),
                  node: Wd,
                  primitive: dd,
                  part: Od,
                  geometry: null
                }
              }));
            this.uses.set(Wd, Kd);
            const hd = null !== Wd.mesh && Fd.has(Wd.mesh);
            Fd.add(Wd.mesh), this.own.set(Wd, hd ? [] : Kd);
            for (const dd of Wd.children) Rd(dd, Wd)
          };
        for (const Xd of dd.rootNodes) Rd(Xd, null);
        this.primitives = dd.nodes.flatMap((dd => {
          var Od;
          return null !== (Od = this.own.get(dd)) && void 0 !== Od ? Od : []
        }))
      }
      decodeGeometries() {
        const dd = new Map;
        return Promise.all(this.primitives.map((async Od => {
          const {
            primitive: md
          } = Od, Wd = md.draco;
          let Fd = Wd ? dd.get(Wd.bufferView.index) : Promise.resolve(jd(md));
          Fd || (Fd = nd(md, this.decode).then((dd => ed(md, dd))), dd.set(Wd.bufferView.index, Fd)), Od.geometry = await Fd
        })))
      }
      parentOf(dd) {
        var Od;
        return null !== (Od = this.parents.get(dd)) && void 0 !== Od ? Od : null
      }
      meshesUnder(dd) {
        const Od = this.model.nodes.filter((dd => this.uses.has(dd)));
        for (const Wd of Od) {
          const Od = this.uses.get(Wd),
            md = Od.find((Od => Od.name === dd));
          if (md) return 1 === Od.length ? this.subtree(Wd) : this.own.get(Wd).includes(md) ? [md] : []
        }
        const md = Od.find((Od => 1 !== this.uses.get(Od).length && Cd(Od) === dd));
        return md ? this.subtree(md) : null
      }
      subtree(dd) {
        return [...this.own.get(dd), ...dd.children.flatMap((dd => this.subtree(this.model.nodes[dd])))]
      }
      worldMatrix(dd, Od, md) {
        let Wd = FO(WO(Od ? Zd : {}), null);
        const Fd = [];
        for (let Xd = dd.part ? dd.node : this.parentOf(dd.node); Xd; Xd = this.parentOf(Xd)) Fd.unshift(Xd);
        for (const Xd of Fd) Wd = FO(WO(Xd), Wd);
        const Rd = WO(dd.part ? {} : dd.node);
        return void 0 !== md && Rd.scale.fill(md), FO(Rd, Wd)
      }
      floats(dd) {
        const {
          vertexAttributes: Od,
          vertexCount: md
        } = dd.geometry;
        return new Map(Od.map((dd => [dd.kind, (0, ud.j)(dd, md)])))
      }
      imageUrl(dd) {
        return function(dd, Od, md) {
          let {
            name: Wd
          } = Od;
          return `data:${dd}${Wd}#image${md}`
        }(this.uniqueRootUrl, this.fileInfo, dd)
      }
      textureDesc(dd, Od) {
        var md;
        let {
          texture: Wd,
          transform: Fd
        } = dd;
        const {
          sampler: Rd,
          image: Xd
        } = this.model.textures[Wd], {
          bufferView: Kd,
          mimeType: hd,
          name: vd
        } = this.model.images[Xd], Qd = Fd && {
          ...Fd.offset ? {
            uOffset: Fd.offset[0],
            vOffset: Fd.offset[1]
          } : {},
          uRotationCenter: 0,
          vRotationCenter: 0,
          ...Fd.rotation ? {
            wAng: -Fd.rotation
          } : {},
          ...Fd.scale ? {
            uScale: Fd.scale[0],
            vScale: Fd.scale[1]
          } : {}
        };
        return {
          url: this.imageUrl(Xd),
          noMipmap: mO(Rd),
          invertY: !1,
          samplingMode: Md(Rd),
          data: {
            bytes: Kd.bytes,
            mimeType: hd,
            label: vd,
            context: `/textures/${Wd}`
          },
          sets: {
            wrapU: OO(Rd.wrapS),
            wrapV: OO(Rd.wrapT),
            ...Qd,
            coordinatesIndex: null !== (md = null === Fd || void 0 === Fd ? void 0 : Fd.texCoord) && void 0 !== md ? md : 0,
            hasAlpha: Od
          }
        }
      }
    }
    async function XO(dd, Od, md, Wd, Fd, Rd) {
      let Xd = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6];
      const Kd = function(dd, Od, md) {
          return "string" !== typeof Od ? {
            url: "",
            rootUrl: dd,
            name: md()
          } : Od ? Od.startsWith("data:") ? {
            url: Od,
            rootUrl: dd,
            name: ""
          } : dd ? {
            url: dd + Od,
            rootUrl: dd,
            name: Od
          } : {
            url: Od,
            rootUrl: ld(Od),
            name: Id(Od)
          } : {
            url: dd,
            rootUrl: ld(dd),
            name: Id(dd)
          }
        }(md, dd, Fd),
        hd = {};
      Od.addPendingData(hd);
      try {
        const md = Gd(await async function(dd, Od) {
            return "string" !== typeof Od ? Od : dd.url.startsWith("data:") ? (0, Vd.n)(dd.url) : await (0, Vd.r)(dd.url)
          }(Kd, dd)),
          hd = new RO(md, Wd, Kd, function(dd, Od) {
            let {
              rootUrl: md,
              name: Wd
            } = dd;
            return !md.startsWith("file:") && Wd ? md : `${md}${Od()}/`
          }(Kd, Fd));
        return await Rd(hd), Od.importedMeshesFiles && (Od.loadingPluginName = "tV", Xd && Od.importedMeshesFiles.push(Kd.url)), hd
      } finally {
        Od.removePendingData(hd)
      }
    }
    var KO = md(39037),
      hO = md(38898),
      vO = md(39449);

    function QO(dd) {
      if (null === dd || void 0 === dd || !dd.min || !dd.max) return null;
      const [Od, md, Wd] = dd.min, [Fd, Rd, Xd] = dd.max, {
        BoundingInfo: Kd,
        Cq: hd
      } = (0, KO.c)();
      return new Kd(new hd(Od, md, Wd), new hd(Fd, Rd, Xd))
    }

    function tO(dd) {
      (0, hO.g)(dd) || (dd.geometry && dd.geometry.useBoundingInfoFromGeometry ? dd._updateBoundingInfo() : dd.refreshBoundingInfo(!0, !0))
    }
    class oO {
      constructor(dd, Od) {
        this.MH = dd, this.decode = Od, this.bufferData = Promise.resolve(), this.viewData = new Map, this.viewBuffers = new Map, this.vertexBuffers = new Map, this.dracoGeometry = new Map
      }
      viewBytes(dd) {
        let Od = this.viewData.get(dd.index);
        return Od || (Od = this.bufferData.then((() => dd.bytes)), this.viewData.set(dd.index, Od)), Od
      }
      viewBuffer(dd) {
        let Od = this.viewBuffers.get(dd.index);
        return Od || (Od = this.viewBytes(dd).then((dd => new((0, KO.c)().CQ)(this.MH.Iq(), dd, !1))), this.viewBuffers.set(dd.index, Od)), Od
      }
      vertexBuffer(dd, Od) {
        const {
          kind: md,
          data: Wd
        } = Od, Fd = `${dd.index}:${md}`;
        let Rd = this.vertexBuffers.get(Fd);
        if (!Rd) {
          const Xd = dd.bufferView;
          Rd = Xd ? this.viewBuffer(Xd).then((dd => this.layoutVertexBuffer(dd, Od))) : Promise.resolve(Wd).then((dd => new((0, KO.c)().VertexBuffer)(this.MH.Iq(), dd, md, !1))), this.vertexBuffers.set(Fd, Rd)
        }
        return Rd
      }
      layoutVertexBuffer(dd, Od) {
        let {
          kind: md,
          offset: Wd,
          stride: Fd,
          components: Rd,
          glType: Xd,
          isNormalized: Kd
        } = Od;
        const hd = this.MH.Iq();
        return new((0, KO.c)().VertexBuffer)(hd, dd, md, !1, void 0, Fd, void 0, Wd, Rd, Xd, Kd, !0, void 0, !0)
      }
      load(dd, Od, md) {
        const Wd = (0, hO.g)(md),
          Fd = dd => {
            Wd || (md._delayInfo = md._delayInfo || [], -1 === md._delayInfo.indexOf(dd) && md._delayInfo.push(dd))
          },
          Rd = Od.draco;
        if (Rd) {
          for (const dd in Rd.attributeIds) Fd(dd);
          let Xd = this.dracoGeometry.get(Rd.bufferView.index);
          return Xd || (Xd = this.viewBytes(Rd.bufferView).then((async () => {
            let Fd;
            try {
              Fd = await nd(Od, this.decode)
            } catch (hd) {
              throw new Vd.i(`${dd}: ${hd instanceof Error?hd.message:String(hd)}`)
            }
            const Rd = ed(Od, Fd);
            if (Wd) return Rd;
            const Xd = QO(Od.position),
              Kd = new((0, KO.c)().MirroredGeometry)(md.name, this.MH);
            Xd && (Kd._boundingInfo = Xd, Kd.useBoundingInfoFromGeometry = !0), Rd.indexData && Kd.setIndices(Rd.indexData);
            for (const dd of Rd.vertexAttributes) Kd.setVerticesBuffer(this.layoutVertexBuffer(dd.data, dd), Rd.vertexCount);
            return Kd.link(Rd), Kd
          })), this.dracoGeometry.set(Rd.bufferView.index, Xd)), Xd
        }
        const Xd = [],
          Kd = jd(Od);
        if (Wd) return md.isUnIndexed = !Kd.indexData, md.hasVertexAlpha = (0, vO.h)(Od), Promise.resolve(Kd);
        const hd = new((0, KO.c)().MirroredGeometry)(md.name, this.MH),
          {
            indexData: vd
          } = Kd;
        vd ? Xd.push(this.viewBytes(Od.indices.bufferView).then((() => {
          hd.setIndices(vd)
        }))) : md.isUnIndexed = !0;
        for (const [Qd, {
            kind: td,
            accessor: od
          }] of Od.attributes.entries()) Fd(td), Xd.push(this.vertexBuffer(od, Kd.vertexAttributes[Qd]).then((dd => {
          if ("position" === dd.getKind()) {
            const dd = QO(od);
            dd && (hd._boundingInfo = dd, hd.useBoundingInfoFromGeometry = !0)
          }
          hd.setVerticesBuffer(dd, Kd.vertexCount)
        })));
        return (0, vO.h)(Od) && (md.hasVertexAlpha = !0), Promise.all(Xd).then((() => (hd.link(Kd), hd)))
      }
    }
    var NO, qO = md(38827),
      HO = md(38627),
      yO = md(39459),
      bO = md(38731),
      TO = md(38799),
      pO = md(2402),
      YO = md(38766);

    function gO(dd, Od) {
      dd.metadata = dd.metadata || {};
      const md = dd._internalMetadata = dd._internalMetadata || {},
        Wd = md.tV = md.tV || {};
      (Wd.pointers = Wd.pointers || []).push(Od)
    }

    function wO(dd, Od) {
      if (Od && Object.keys(Od).length > 0) {
        const md = dd.metadata = dd.metadata || {};
        (md.tV = md.tV || {}).extras = Od
      }
    }

    function aO(dd, Od) {
      Od.position = dd.translation ? HO.Cq.FromArray(dd.translation) : HO.Cq.Zero(), Od.rotationQuaternion = dd.rotation ? HO.Quaternion.FromArray(dd.rotation) : HO.Quaternion.Identity(), Od.Tt = dd.scale ? HO.Cq.FromArray(dd.scale) : HO.Cq.One()
    }
    class EO {
      constructor(dd, Od) {
        if (this.MH = dd, this.meshes = [], this.transformNodes = [], this.geometries = [], this.materials = [], this.textures = [], this.rootNodes = [], this.release = null, Od) {
          const Od = dd.Iq(),
            md = dd.cV.add((() => {
              this.dispose()
            })),
            Wd = Od.eq.add((() => {
              for (const dd of [...this.geometries, ...this.meshes, ...this.textures]) dd._rebuild()
            }));
          this.release = () => {
            dd.cV.remove(md), Od.eq.remove(Wd)
          }
        }
      }
      getNodes() {
        return [...this.meshes, ...this.transformNodes]
      }
      addAllToScene() {
        if (this.release) {
          this.release(), this.release = null;
          for (const dd of this.meshes) this.MH.hRd(dd);
          for (const dd of this.materials) this.MH.addMaterial(dd);
          for (const dd of this.geometries) this.MH.addGeometry(dd);
          for (const dd of this.transformNodes) this.MH.addTransformNode(dd);
          for (const dd of this.textures) this.MH.addTexture(dd)
        }
      }
      dispose() {
        var dd;
        for (const Od of [this.meshes, this.materials, this.geometries, this.transformNodes, this.textures]) {
          for (const dd of Od.slice()) dd.dispose();
          Od.length = 0
        }
        null === (dd = this.release) || void 0 === dd || dd.call(this), this.release = null
      }
    }
    class JO {
      constructor(dd, Od, md, Wd, Fd, Rd, Xd) {
        this.asset = dd, this.MH = Od, this.tree = md, this.geometryData = Fd, this.materials = Rd, this.lite = Xd, this.container = void 0, this.root = null, this.nodeObjects = new Map, this.nodePrimitives = new Map, this.materialData = new Map, this.container = Wd ? md : null
      }
      create(dd) {
        if (this.lite) return dd();
        const Od = this.MH;
        Od._blockEntityCollection = !!this.container;
        try {
          const Od = dd();
          return this.container && (Od._parentContainer = this.container), Od
        } finally {
          Od._blockEntityCollection = !1
        }
      }
      node(dd, Od) {
        return this.create((() => this.lite ? Od ? (0, yO.f)(this.lite, dd) : (0, yO.q)(this.lite, dd) : Od ? new((0, KO.c)().Mesh)(dd, this.MH) : new((0, KO.c)().TransformNode)(dd, this.MH)))
      }
      async load() {
        var dd;
        this.asset.model.json.nodes && this.createRoot();
        const Od = this.lite ? null : this.MH,
          md = null !== (dd = null === Od || void 0 === Od ? void 0 : Od.blockMaterialDirtyMechanism) && void 0 !== dd && dd;
        let Wd;
        Od && (Od.blockMaterialDirtyMechanism = !0);
        try {
          Wd = this.loadScene()
        } finally {
          null === Od || void 0 === Od || Od._forceBlockMaterialDirtyMechanism(md)
        }
        await Wd;
        const {
          root: Fd,
          tree: Rd
        } = this;
        Fd && (Fd.rY(!0), Rd.meshes.push(Fd), Rd.rootNodes.push(Fd));
        for (const Kd of this.asset.model.nodes) {
          const dd = this.nodeObjects.get(Kd.index);
          dd && ["TransformNode", "LiteNode"].includes(dd.getClassName()) && Rd.transformNodes.push(dd);
          for (const Od of null !== (Xd = this.nodePrimitives.get(Kd.index)) && void 0 !== Xd ? Xd : []) {
            var Xd;
            Rd.meshes.push(Od);
            const dd = Od.geometry;
            dd && !Rd.geometries.includes(dd) && Rd.geometries.push(dd)
          }
        }
      }
      createRoot() {
        const dd = this.node("__root__", !0);
        this.root = dd, dd.rY(!1), this.MH.useRightHandedSystem || aO(Zd, dd)
      }
      loadScene() {
        const dd = [];
        for (const Od of this.asset.model.rootNodes) dd.push(this.loadNode(this.asset.model.nodes[Od], (dd => {
          dd.parent = this.root
        })));
        return dd.push(Promise.resolve()), Promise.all(dd).then((() => {}))
      }
      loadNode(dd, Od) {
        const md = `/nodes/${dd.index}`,
          Wd = [],
          Fd = Fd => {
            if (gO(Fd, md), aO(dd, Fd), dd.hasCamera && !this.MH.useRightHandedSystem) {
              const {
                Tt: dd
              } = Fd;
              dd.set(-1, dd.y, dd.z)
            }
            for (const Od of dd.children) Wd.push(this.loadNode(this.asset.model.nodes[Od], (dd => {
              dd.parent = Fd
            })));
            (md => {
              wO(md, dd.extras), Od(md)
            })(Fd)
          };
        if (null === dd.mesh) {
          const Od = this.node(Cd(dd), !1);
          this.nodeObjects.set(dd.index, Od), Fd(Od)
        } else {
          const Od = this.asset.model.meshes[dd.mesh];
          Wd.push(this.loadMesh(`/meshes/${Od.index}`, dd, Od, Fd))
        }
        return Promise.all(Wd).then((() => {
          for (const md of null !== (Od = this.nodePrimitives.get(dd.index)) && void 0 !== Od ? Od : []) {
            var Od;
            tO(md)
          }
          return this.nodeObjects.get(dd.index)
        }))
      }
      loadMesh(dd, Od, md, Wd) {
        const Fd = [],
          Rd = Cd(Od);
        if (1 === md.primitives.length) {
          const Wd = md.primitives[0];
          Fd.push(this.loadPrimitive(`${dd}/primitives/${Wd.index}`, Rd, Wd, (dd => {
            this.nodeObjects.set(Od.index, dd), this.nodePrimitives.set(Od.index, [dd])
          })))
        } else {
          const Wd = this.node(Rd, !1);
          this.nodeObjects.set(Od.index, Wd);
          const Xd = [];
          this.nodePrimitives.set(Od.index, Xd);
          for (const Od of md.primitives) Fd.push(this.loadPrimitive(`${dd}/primitives/${Od.index}`, `${Rd}_primitive${Od.index}`, Od, (dd => {
            dd.parent = Wd, Xd.push(dd)
          })))
        }
        const Xd = this.nodeObjects.get(Od.index);
        return Wd(Xd), Promise.all(Fd).then((() => Xd))
      }
      loadPrimitive(dd, Od, md, Wd) {
        const Fd = [],
          Rd = this.node(Od, !0);
        if (Rd.sideOrientation = this.MH.useRightHandedSystem ? bO.c.CounterClockWiseSideOrientation : bO.c.ClockWiseSideOrientation, Fd.push(this.geometryData.load(dd, md, Rd).then((dd => {
            if ((0, hO.g)(Rd)) {
              var Od, md;
              const Wd = dd;
              Rd.replaceModel(Wd, Int32Array.of(0, null !== (Od = null === (md = Wd.indexData) || void 0 === md ? void 0 : md.length) && void 0 !== Od ? Od : Wd.vertexCount, 0, Wd.vertexCount))
            } else this.create((() => (dd.applyToMesh(Rd), dd)))
          }))), this.materials) {
          const dd = 0 === md.mode ? bO.c.PointListDrawMode : bO.c.TriangleFillMode,
            Od = null === md.material ? null : this.asset.model.materials[md.material];
          Fd.push(this.loadMaterial(Od, dd, (dd => {
            Rd.material = dd
          })))
        }
        return gO(Rd, dd), Wd(Rd), Promise.all(Fd).then((() => Rd))
      }
      loadMaterial(dd, Od, md) {
        var Wd;
        const Fd = `${null!==(Wd=null===dd||void 0===dd?void 0:dd.index)&&void 0!==Wd?Wd:"default"}:${Od}`;
        let Rd = this.materialData.get(Fd);
        return Rd || (Rd = this.createMaterial(dd, Od), this.materialData.set(Fd, Rd)), md(Rd.material), Rd.promise
      }
      createMaterial(dd, Od) {
        const md = dd ? dd.name || `material${dd.index}` : "__GLTFLoader._default",
          {
            style: Wd,
            unlit: Fd
          } = this.materials;
        let Rd;
        const Xd = this.create((() => {
          const Xd = (0, YO.d)({
            name: md,
            MH: this.MH,
            sets: {
              ...(0, vO.d)(this.asset, dd, Wd, Fd),
              fillMode: Od
            },
            unrendered: !0
          });
          return Rd = Xd.model, Xd.mirror
        }));
        let Kd = Promise.resolve();
        if (dd) {
          const Od = `/materials/${dd.index}`,
            Wd = Rd.diffuseTexture;
          if (Wd && !Wd.mirror) Kd = new Promise((dd => setTimeout(dd)));
          else if (Wd) {
            const Fd = Wd.mirror;
            Fd._parentContainer = this.container, Fd.name = `${md} (Base Color)`, gO(Fd, `${Od}${dd.unlit?"":"/pbrMetallicRoughness"}/baseColorTexture`), this.tree.textures.push(Fd), Kd = (0, TO.s)(Wd)
          }
          wO(Xd, dd.extras), gO(Xd, Od)
        }
        return this.tree.materials.push(Xd), {
          material: Xd,
          promise: Kd
        }
      }
    }

    function UO() {
      qO.d.dracoDecodes = wd.decodes, qO.d.dracoWorkersStarted = wd.workersStarted, qO.d.dracoMostWorkers = wd.mostWorkers
    }
    async function xO(dd, Od, md, Fd, Rd) {
      try {
        return await async function(dd, Od, md, Fd, Rd, Xd) {
          var Kd;
          let hd;
          const vd = null === (Kd = (0, pO.c)()) || void 0 === Kd ? void 0 : Kd.gt,
            Qd = null !== vd && void 0 !== vd && vd.NH && Od === vd.zV() ? vd : null,
            td = Rd && !Qd;
          return await XO(dd, Od, md, Fd, Wd.b, (dd => (hd = new EO(Od, td), new JO(dd, Od, hd, td, new oO(Od, Fd), Xd, Qd).load())), !Rd), hd
        }(dd, Od, md, Sd, Fd, Rd)
      } finally {
        UO()
      }
    }
    async function BO(dd, Od, md, Fd) {
      try {
        return await XO(dd, Od, md, Sd, Wd.b, (dd => Fd(dd, new oO(Od, Sd))))
      } finally {
        UO()
      }
    }
    NO = Kd, bd || (bd = {
      scriptUrl: new URL(NO.scriptUrl, location.href).href,
      wasmBinaryUrl: new URL(NO.wasmBinaryUrl, location.href).href
    })
  },
  37635: dd => {
    dd.exports = function(dd, Od, md, Wd) {
      var Fd = self || window;
      try {
        try {
          var Rd;
          try {
            Rd = new Fd.Blob([dd])
          } catch (vd) {
            (Rd = new(Fd.BlobBuilder || Fd.WebKitBlobBuilder || Fd.MozBlobBuilder || Fd.MSBlobBuilder)).append(dd), Rd = Rd.getBlob()
          }
          var Xd = Fd.URL || Fd.webkitURL,
            Kd = Xd.createObjectURL(Rd),
            hd = new Fd[Od](Kd, md);
          return Xd.revokeObjectURL(Kd), hd
        } catch (vd) {
          return new Fd[Od]("data:application/javascript,".concat(encodeURIComponent(dd)), md)
        }
      } catch (vd) {
        if (!Wd) throw Error("Inline worker is not supported");
        return new Fd[Od](Wd, md)
      }
    }
  },
  53952: (dd, Od, md) => {
    dd.exports = md.p + "static/media/draco_wasm_wrapper_gltf_v2_1.8b33994b6159ad3fc976.js"
  },
  53960: (dd, Od, md) => {
    dd.exports = md.p + "static/media/draco_decoder_gltf_v2_1.1207caa8c6e38dc2aa04.wasm"
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);