export const id = 259;
export const ids = [259];
export const modules = {
  39740: (zz, uz, bz) => {
    bz.d(uz, {
      $d: () => gu,
      Bc: () => Qu,
      Bd: () => qz,
      Be: () => eb,
      Bf: () => Cb,
      Cb: () => cz,
      Cc: () => Sz,
      Cd: () => mz,
      Ce: () => Qb,
      D: () => Du,
      Ed: () => Zu,
      Ef: () => kb,
      Fb: () => bb,
      Fe: () => ab,
      Ff: () => uE,
      Gc: () => Wz,
      H: () => Qz,
      Hb: () => ub,
      I: () => eu,
      Id: () => tz,
      Ie: () => mb,
      Jc: () => ju,
      Jd: () => Oz,
      Jf: () => jb,
      K: () => dz,
      Kc: () => Eu,
      Kf: () => ob,
      Lb: () => Fu,
      Le: () => Vb,
      Me: () => Bb,
      N: () => nu,
      Nb: () => Mu,
      Nc: () => pu,
      Nd: () => Ku,
      Oc: () => Jz,
      Oe: () => Gb,
      Of: () => Kb,
      Pb: () => nz,
      Pc: () => Hu,
      Pd: () => Wu,
      Pf: () => Ib,
      Qf: () => hb,
      R: () => Az,
      Rd: () => gz,
      Sb: () => wz,
      Se: () => cb,
      Tc: () => tu,
      Uf: () => Ub,
      V: () => Lz,
      Vd: () => du,
      Ve: () => Pb,
      Wb: () => Xu,
      We: () => yb,
      X: () => Tz,
      Xc: () => bu,
      Xf: () => fb,
      Yf: () => Rb,
      Z: () => yu,
      Zb: () => Bz,
      Zd: () => Iu,
      Ze: () => Sb,
      _c: () => xz,
      _e: () => gb,
      ac: () => zb,
      ad: () => sz,
      ae: () => zu,
      ag: () => qb,
      bb: () => Fz,
      bd: () => Ez,
      be: () => kz,
      bf: () => nE,
      cb: () => Dz,
      cd: () => vz,
      cf: () => vb,
      db: () => iE,
      dc: () => Pz,
      df: () => Tb,
      dg: () => Nb,
      e: () => iz,
      eb: () => ku,
      ed: () => lu,
      ee: () => yz,
      fc: () => Yz,
      gb: () => Iz,
      gc: () => Cz,
      gd: () => Kz,
      hc: () => uu,
      hf: () => xb,
      hg: () => sb,
      i: () => lz,
      id: () => Rz,
      ie: () => rz,
      if: () => Lb,
      ig: () => Wb,
      jg: () => Xb,
      k: () => Nz,
      kb: () => Cu,
      kc: () => Ru,
      l: () => hz,
      lc: () => ez,
      le: () => pz,
      lg: () => Db,
      md: () => Zz,
      mf: () => Ab,
      nb: () => Yu,
      nc: () => Gz,
      oe: () => tb,
      of: () => Jb,
      og: () => db,
      p: () => Hb,
      qb: () => jz,
      qc: () => iu,
      qd: () => ib,
      qe: () => bE,
      rb: () => Bu,
      rc: () => Xz,
      rf: () => EE,
      rg: () => Zb,
      sc: () => fz,
      t: () => Mb,
      tb: () => Uz,
      td: () => lb,
      ub: () => Eb,
      ud: () => oz,
      ue: () => wb,
      uf: () => Yb,
      vc: () => Ou,
      w: () => Mz,
      xe: () => rb,
      xf: () => zE,
      yb: () => nb,
      yc: () => Hz,
      yd: () => Vz,
      ye: () => Fb,
      z: () => Su,
      zd: () => az
    });
    const Ez = -2147483648,
      nz = 12,
      iz = 12,
      lz = 4095,
      Mz = {
        Lifeform: 1,
        Throwable: 2,
        Mesh: 3,
        Audio: 4,
        Item: 5
      },
      tz = {
        Alive: 1,
        Crouching: 2,
        OnGround: 4,
        InFluid: 8,
        Spectating: 16,
        AttemptingBreak: 32,
        Aiming: 64,
        FirstPerson: 128,
        Replay: 256,
        Breaking: 512,
        CursorAim: 1024,
        FreeCam: 2048,
        ZoomFirstPerson: 4096,
        JumpHeld: 8192,
        Flying: 16384,
        CanFly: 32768,
        PadSneakToggled: 65536,
        DropAhead: 131072,
        FreeCamMoves: 262144
      },
      Hz = {
        None: 0,
        Entity: 1,
        Open: 2,
        Close: 3,
        Milk: 4,
        Shear: 5,
        Tame: 6,
        TameWith: 7,
        Feed: 8,
        Ride: 9
      },
      Oz = {
        Off: 0,
        Key: 1,
        Touch: 2
      },
      pz = {
        Alive: 16
      },
      dz = 32,
      Fz = {
        Stored: 1,
        Unloaded: 2,
        ResetAll: 4
      },
      Zz = {
        opacity: 0,
        zIndex: 1,
        overlayColour: 2,
        canAttack: 3,
        canSee: 4,
        interactable: 5,
        interactionPrompt: 6,
        showDamageAmounts: 7,
        lockHeadToBody: 8,
        killfeedColour: 9,
        meshScaling: 10,
        colorInLobbyLeaderboard: 11,
        lobbyLeaderboardValues: 12,
        lobbyLeaderboardTags: 13,
        nameTagInfo: 14,
        hasPriorityNametag: 15,
        alwaysInInterest: 16,
        multilineTextBox: 17,
        ranks: 18,
        nameColour: 19,
        hideNameSeed: 20,
        _leaderboardAround: 21,
        _invincible: 22,
        _isAlive: 23,
        _invisibleEffect: 24,
        _glowingEffect: 25,
        _armourReductionSum: 26,
        _protectionEnchantSum: 27,
        _receivingDamageMultiplier: 28
      },
      Rz = 4294967295,
      Kz = 0,
      wz = 4294967295,
      Xz = 4,
      fz = 123,
      sz = -2147483648,
      rz = {
        Off: 0,
        All: 1,
        Filter: 2
      },
      oz = 51,
      Nz = 5,
      vz = 4294967295,
      xz = 4294967295,
      Jz = 128,
      Az = ["Workbench", "Furnace", "Artisan Bench", "Potion Table", "Salvaging Table", "Enchanting Table"],
      Tz = 16,
      Lz = 255,
      Pz = {
        Off: 0,
        On: 1,
        Keep: 2
      },
      Gz = {
        AltVeto: 1,
        AltAction: 2,
        Click: 3,
        ChangeBlock: 4,
        DropItem: 5,
        Tick: 6,
        Message: 7,
        Create: 8,
        Director: 11
      },
      az = {
        Hotbar: 256,
        Drop: 257
      },
      Vz = {
        Down: 1,
        Next: 2,
        Stack: 4
      },
      mz = {
        Rate: 0,
        Gyro: 1
      },
      qz = {
        Active: 1,
        JumpHeld: 2,
        JumpPressed: 4,
        Running: 8,
        SprintHeld: 16,
        SneakHeld: 32,
        SneakHoldMode: 64,
        Peek: 128,
        EndToggle: 256
      },
      hz = {
        Prevent: 0,
        Allow: 1,
        PreventPlacement: 2
      },
      Uz = {
        None: 0,
        Pose: 1,
        FaceMovement: 2,
        FaceCamera: 3,
        FaceCursor: 4
      },
      cz = {
        LookPointed: 1,
        Held: 2
      },
      gz = 3,
      Sz = {
        Synced: 0,
        ChestOpened: 1,
        ChestClosed: 2,
        ChestRefreshed: 3,
        EnchantingTable: 4,
        HotbarRequest: 5,
        Scrolled: 6,
        NumberKey: 7,
        DropRequested: 8
      },
      yz = {
        ToggleMenu: 0,
        EditBoard: 1,
        EditCodeBlock: 2,
        ViewCodeBlock: 3,
        EditCustomLobbyBlock: 4,
        OpenIronChest: 5,
        EditNameTag: 6,
        EditBook: 7,
        CantChangeBlock: 8,
        MiddleBarStart: 9,
        MiddleBarStop: 10,
        AimingOverlay: 11,
        BottomMessage: 12,
        Hitmarker: 13,
        ShotsLeft: 14,
        Crosshair: 15,
        ChargeStage: 16,
        EmoteWheelClose: 17,
        BlockMined: 18
      },
      Dz = {
        Alt: 1,
        Up: 2,
        HasPos: 4,
        AttackOnly: 8
      },
      Qz = {
        Solid: 1,
        Fluid: 2,
        PlaceOver: 4
      },
      Wz = {
        Stackable: 1
      },
      ez = {
        granule: 1,
        wood: 2,
        rock: 3,
        cuttable: 4
      },
      jz = {
        Detail: 1,
        RoomForOne: 2
      },
      Iz = {
        HaveIngredients: 1,
        Listed: 2
      },
      Bz = {
        HasOpts: 1
      },
      Cz = {
        Flat: 0,
        Chevrons: 1,
        FurnaceFire: 2,
        FlatOpaque: 3,
        FlatOnTop: 4
      },
      Yz = {
        Up: 1,
        Down: 2
      },
      kz = {
        TwoD: 1,
        Loop: 2
      },
      zu = {
        StopAfter: 1
      },
      uu = {
        Anchor: 1,
        Visible: 2,
        UvOffset: 4,
        Visibility: 8,
        Scale: 16
      },
      bu = {
        Pose: 1,
        Visible: 2
      },
      Eu = 255,
      nu = 65535,
      iu = 255,
      lu = 65535,
      Mu = ["standing", "sitting", "zombie", "gliding", "driving", "sleeping", "riding"],
      tu = ["", "Sheared", "Saddled", "Antlers", "skyblockHeldBoss"],
      Hu = ["Box", "BloxdBlock", "Person", "Leaderboard", "ParticleEmitter"],
      Ou = {
        Bytes: 16,
        Hidden: 2147483648,
        Max: 262144
      },
      pu = 4294967295,
      du = 4294967295,
      Fu = 255,
      Zu = {
        PresetNone: 65535,
        HasBox: 1,
        Anchored: 1,
        MaxOpts: 4096,
        MaxBurst: 2e3,
        MaxPoints: 512,
        PointBytes: 16,
        MaxKey: 1073741823,
        MaxLiveKeys: 256
      },
      Ru = {
        critical: 123
      },
      Ku = 4294967295,
      wu = {
        BYTES: 4,
        sd: (zz, uz) => zz.getUint32(uz + 0, !0)
      },
      Xu = {
        BYTES: 12,
        serverId: (zz, uz) => zz.getInt32(uz + 0, !0),
        index: (zz, uz) => zz.getUint32(uz + 4, !0),
        kind: (zz, uz) => zz.getUint16(uz + 8, !0)
      },
      fu = {
        BYTES: 20,
        pos: (zz, uz, bz) => zz.getInt32(uz + 0 + 4 * bz, !0),
        actual: (zz, uz) => zz.getUint32(uz + 12, !0),
        dataLen: (zz, uz) => zz.getUint32(uz + 16, !0)
      },
      su = {
        BYTES: 20,
        what: (zz, uz) => zz.getUint8(uz + 0),
        value: (zz, uz) => zz.getInt16(uz + 2, !0),
        pos: (zz, uz, bz) => zz.getInt32(uz + 4 + 4 * bz, !0),
        block: (zz, uz) => zz.getUint32(uz + 16, !0)
      },
      ru = {
        BYTES: 4,
        item: (zz, uz) => zz.getUint16(uz + 0, !0),
        slot: (zz, uz) => zz.getUint8(uz + 2)
      },
      ou = {
        BYTES: 16,
        target: (zz, uz) => zz.getInt32(uz + 0, !0),
        damage: (zz, uz) => zz.getFloat32(uz + 4, !0),
        distance: (zz, uz) => zz.getFloat32(uz + 8, !0),
        crit: (zz, uz) => zz.getUint8(uz + 12)
      },
      Nu = {
        BYTES: 4,
        slot: (zz, uz) => zz.getUint16(uz + 0, !0)
      },
      vu = {
        BYTES: 20,
        what: (zz, uz) => zz.getUint8(uz + 0),
        value: (zz, uz) => zz.getInt16(uz + 2, !0),
        pos: (zz, uz, bz) => zz.getInt32(uz + 4 + 4 * bz, !0),
        block: (zz, uz) => zz.getUint32(uz + 16, !0)
      },
      xu = {
        BYTES: 12,
        serverId: (zz, uz) => zz.getInt32(uz + 0, !0),
        index: (zz, uz) => zz.getUint32(uz + 4, !0),
        what: (zz, uz) => zz.getUint16(uz + 8, !0)
      },
      Ju = {
        BYTES: 24,
        cx: (zz, uz) => zz.getInt32(uz + 0, !0),
        cy: (zz, uz) => zz.getInt32(uz + 4, !0),
        cz: (zz, uz) => zz.getInt32(uz + 8, !0),
        slot: (zz, uz) => zz.getUint32(uz + 12, !0),
        generation: (zz, uz) => zz.getUint32(uz + 16, !0),
        flags: (zz, uz) => zz.getUint32(uz + 20, !0)
      },
      Au = {
        BYTES: 44,
        pos: (zz, uz, bz) => zz.getFloat64(uz + 0 + 8 * bz, !0),
        sound: (zz, uz) => zz.getUint16(uz + 24, !0),
        flags: (zz, uz) => zz.getUint16(uz + 26, !0),
        handle: (zz, uz) => zz.getUint32(uz + 28, !0),
        volume: (zz, uz) => zz.getFloat32(uz + 32, !0),
        rate: (zz, uz) => zz.getFloat32(uz + 36, !0),
        refDist: (zz, uz) => zz.getFloat32(uz + 40, !0)
      },
      Tu = {
        BYTES: 28,
        pos: (zz, uz, bz) => zz.getFloat64(uz + 0 + 8 * bz, !0),
        handle: (zz, uz) => zz.getUint32(uz + 24, !0)
      },
      Lu = {
        BYTES: 16,
        handle: (zz, uz) => zz.getUint32(uz + 0, !0),
        volume: (zz, uz) => zz.getFloat32(uz + 4, !0),
        rate: (zz, uz) => zz.getFloat32(uz + 8, !0),
        refDist: (zz, uz) => zz.getFloat32(uz + 12, !0)
      },
      Pu = {
        BYTES: 12,
        handle: (zz, uz) => zz.getUint32(uz + 0, !0),
        to: (zz, uz) => zz.getFloat32(uz + 4, !0),
        ms: (zz, uz) => zz.getUint16(uz + 8, !0),
        flags: (zz, uz) => zz.getUint16(uz + 10, !0)
      },
      Gu = {
        BYTES: 4,
        handle: (zz, uz) => zz.getUint32(uz + 0, !0)
      },
      au = {
        BYTES: 4,
        reason: (zz, uz) => zz.getUint8(uz + 0),
        code: (zz, uz) => zz.getUint8(uz + 1)
      },
      Vu = {
        BYTES: 4,
        key: (zz, uz) => zz.getUint8(uz + 0),
        tag: (zz, uz) => zz.getUint8(uz + 1)
      },
      mu = {
        BYTES: 16,
        save: (zz, uz) => zz.getUint32(uz + 0, !0),
        index: (zz, uz) => zz.getUint32(uz + 4, !0),
        ptr: (zz, uz) => zz.getUint32(uz + 8, !0),
        len: (zz, uz) => zz.getUint32(uz + 12, !0)
      },
      qu = {
        BYTES: 16,
        save: (zz, uz) => zz.getUint32(uz + 0, !0),
        kind: (zz, uz) => zz.getUint8(uz + 4),
        parts: (zz, uz) => zz.getUint32(uz + 8, !0),
        bytes: (zz, uz) => zz.getUint32(uz + 12, !0)
      },
      hu = {
        BYTES: 4,
        totalTicks: (zz, uz) => zz.getUint32(uz + 0, !0)
      },
      Uu = {
        BYTES: 24,
        what: (zz, uz) => zz.getUint8(uz + 0),
        int: (zz, uz) => zz.getInt32(uz + 4, !0),
        x: (zz, uz) => zz.getFloat64(uz + 8, !0),
        y: (zz, uz) => zz.getFloat64(uz + 16, !0)
      },
      cu = {
        BYTES: 8,
        what: (zz, uz) => zz.getUint8(uz + 0),
        kind: (zz, uz) => zz.getUint8(uz + 1),
        save: (zz, uz) => zz.getUint32(uz + 4, !0)
      },
      gu = {
        BYTES: 4,
        zM: (zz, uz) => zz.getUint16(uz + 0, !0)
      },
      Su = {
        BYTES: 360,
        eye: (zz, uz, bz) => zz.getFloat64(uz + 0 + 8 * bz, !0),
        localPos: (zz, uz, bz) => zz.getFloat64(uz + 24 + 8 * bz, !0),
        Z6: (zz, uz, bz) => zz.getFloat64(uz + 48 + 8 * bz, !0),
        viewProj: (zz, uz, bz) => zz.getFloat32(uz + 72 + 4 * bz, !0),
        origin: (zz, uz, bz) => zz.getInt32(uz + 136 + 4 * bz, !0),
        heading: (zz, uz) => zz.getFloat32(uz + 148, !0),
        pitch: (zz, uz) => zz.getFloat32(uz + 152, !0),
        tanHalfFovX: (zz, uz) => zz.getFloat32(uz + 156, !0),
        tanHalfFovY: (zz, uz) => zz.getFloat32(uz + 160, !0),
        viewportCss: (zz, uz, bz) => zz.getFloat32(uz + 164 + 4 * bz, !0),
        localVel: (zz, uz, bz) => zz.getFloat32(uz + 172 + 4 * bz, !0),
        actionDir: (zz, uz, bz) => zz.getFloat32(uz + 184 + 4 * bz, !0),
        localId: (zz, uz) => zz.getInt32(uz + 196, !0),
        playerFlags: (zz, uz) => zz.getUint32(uz + 200, !0),
        targetBlock: (zz, uz, bz) => zz.getInt32(uz + 204 + 4 * bz, !0),
        targetAdjacent: (zz, uz, bz) => zz.getInt32(uz + 216 + 4 * bz, !0),
        targetBlockId: (zz, uz) => zz.getUint32(uz + 228, !0),
        targetNormal: (zz, uz, bz) => zz.getInt8(uz + 232 + 1 * bz),
        targetFlags: (zz, uz) => zz.getUint8(uz + 235),
        pickedEntity: (zz, uz) => zz.getInt32(uz + 236, !0),
        breakingPos: (zz, uz, bz) => zz.getInt32(uz + 240 + 4 * bz, !0),
        breakingProgress: (zz, uz) => zz.getFloat32(uz + 252, !0),
        Fv: (zz, uz) => zz.getUint16(uz + 256, !0),
        selectedSlot: (zz, uz) => zz.getUint8(uz + 258),
        heldFlags: (zz, uz) => zz.getUint8(uz + 259),
        heldAttrVersion: (zz, uz) => zz.getUint32(uz + 260, !0),
        inventoryVersion: (zz, uz) => zz.getUint32(uz + 264, !0),
        effectsVersion: (zz, uz) => zz.getUint32(uz + 268, !0),
        entitiesVersion: (zz, uz) => zz.getUint32(uz + 272, !0),
        entRenderPtr: (zz, uz) => zz.getUint32(uz + 276, !0),
        entCapacity: (zz, uz) => zz.getUint32(uz + 280, !0),
        frameMs: (zz, uz) => zz.getFloat32(uz + 284, !0),
        fps: (zz, uz) => zz.getFloat32(uz + 288, !0),
        entVisPtr: (zz, uz) => zz.getUint32(uz + 292, !0),
        momentumFrac: (zz, uz) => zz.getFloat32(uz + 296, !0),
        chunkSlotsPtr: (zz, uz) => zz.getUint32(uz + 300, !0),
        chunkSlotsLen: (zz, uz) => zz.getUint32(uz + 304, !0),
        walkThroughPtr: (zz, uz) => zz.getUint32(uz + 308, !0),
        walkThroughLen: (zz, uz) => zz.getUint32(uz + 312, !0),
        audioViewPtr: (zz, uz) => zz.getUint32(uz + 316, !0),
        inventoryViewPtr: (zz, uz) => zz.getUint32(uz + 320, !0),
        eventOverflowGen: (zz, uz) => zz.getUint32(uz + 324, !0),
        eventOverflowMask: (zz, uz) => zz.getUint32(uz + 328, !0),
        promptEntity: (zz, uz) => zz.getInt32(uz + 332, !0),
        replayViewPtr: (zz, uz) => zz.getUint32(uz + 336, !0),
        slotIcon: (zz, uz) => zz.getUint32(uz + 340, !0),
        localDeaths: (zz, uz) => zz.getUint32(uz + 344, !0),
        cameraFar: (zz, uz) => zz.getFloat32(uz + 348, !0),
        gliderBoostFuel: (zz, uz) => zz.getUint32(uz + 352, !0),
        interactLabel: (zz, uz) => zz.getUint16(uz + 356, !0),
        interactIcon: (zz, uz) => zz.getUint16(uz + 358, !0)
      },
      yu = {
        BYTES: 16,
        voxelsPtr: (zz, uz) => zz.getUint32(uz + 0, !0),
        version: (zz, uz) => zz.getUint32(uz + 4, !0),
        generation: (zz, uz) => zz.getUint32(uz + 8, !0),
        yM: (zz, uz) => zz.getUint32(uz + 12, !0)
      },
      Du = {
        BYTES: 56,
        listener: (zz, uz, bz) => zz.getFloat64(uz + 0 + 8 * bz, !0),
        forward: (zz, uz, bz) => zz.getFloat32(uz + 24 + 4 * bz, !0),
        up: (zz, uz, bz) => zz.getFloat32(uz + 36 + 4 * bz, !0),
        dropped: (zz, uz) => zz.getUint32(uz + 48, !0),
        unfollowed: (zz, uz) => zz.getUint32(uz + 52, !0)
      },
      Qu = {
        BYTES: 8,
        item: (zz, uz) => zz.getUint16(uz + 0, !0),
        amount: (zz, uz) => zz.getUint16(uz + 2, !0),
        attrVersion: (zz, uz) => zz.getUint32(uz + 4, !0)
      },
      Wu = {
        BYTES: 76,
        version: (zz, uz) => zz.getUint32(uz + 0, !0),
        state: (zz, uz) => zz.getUint8(uz + 4),
        cameraMode: (zz, uz) => zz.getUint8(uz + 5),
        sd: (zz, uz) => zz.getUint32(uz + 8, !0),
        totalTicks: (zz, uz) => zz.getUint32(uz + 12, !0),
        speed: (zz, uz) => zz.getFloat32(uz + 16, !0),
        markIn: (zz, uz) => zz.getUint32(uz + 20, !0),
        markOut: (zz, uz) => zz.getUint32(uz + 24, !0),
        editVersion: (zz, uz) => zz.getUint32(uz + 28, !0),
        drops: (zz, uz, bz) => zz.getUint32(uz + 32 + 4 * bz, !0)
      },
      eu = {
        BYTES: 6,
        flags: (zz, uz) => zz.getUint8(uz + 0),
        harvestType: (zz, uz) => zz.getUint8(uz + 1),
        harvestLevel: (zz, uz) => zz.getUint8(uz + 2),
        attachedTop: (zz, uz) => zz.getUint16(uz + 4, !0)
      },
      ju = {
        BYTES: 3,
        flags: (zz, uz) => zz.getUint8(uz + 0),
        harvests: (zz, uz) => zz.getUint8(uz + 1),
        level: (zz, uz) => zz.getUint8(uz + 2)
      },
      Iu = {
        BYTES: 12,
        item: (zz, uz) => zz.getUint32(uz + 0, !0),
        amount: (zz, uz) => zz.getFloat64(uz + 4, !0)
      },
      Bu = {
        BYTES: 16,
        recipes: (zz, uz) => zz.getUint32(uz + 0, !0),
        ingredients: (zz, uz) => zz.getUint32(uz + 4, !0),
        craftAllTimes: (zz, uz) => zz.getUint32(uz + 8, !0),
        flags: (zz, uz) => zz.getUint32(uz + 12, !0)
      },
      Cu = {
        BYTES: 10,
        item: (zz, uz) => zz.getUint16(uz + 0, !0),
        recipe: (zz, uz) => zz.getUint16(uz + 2, !0),
        produces: (zz, uz) => zz.getUint16(uz + 4, !0),
        requires: (zz, uz) => zz.getUint16(uz + 6, !0),
        flags: (zz, uz) => zz.getUint8(uz + 8)
      },
      Yu = {
        BYTES: 4,
        amount: (zz, uz) => zz.getUint16(uz + 0, !0),
        items: (zz, uz) => zz.getUint16(uz + 2, !0)
      },
      ku = {
        BYTES: 8,
        amount: (zz, uz) => zz.getUint32(uz + 0, !0),
        item: (zz, uz) => zz.getUint16(uz + 4, !0),
        from: (zz, uz) => zz.getUint16(uz + 6, !0)
      },
      zb = {
        BYTES: 16,
        serverId: (zz, uz) => zz.getInt32(uz + 0, !0),
        len: (zz, uz) => zz.getUint32(uz + 4, !0),
        kind: (zz, uz) => zz.getUint16(uz + 8, !0),
        variation: (zz, uz) => zz.getUint16(uz + 10, !0),
        pose: (zz, uz) => zz.getUint8(uz + 12),
        meta: (zz, uz) => zz.getUint8(uz + 13),
        mesh: (zz, uz) => zz.getUint8(uz + 14),
        flags: (zz, uz) => zz.getUint8(uz + 15)
      },
      ub = {
        BYTES: 40,
        terrainOpaque: (zz, uz) => zz.getUint32(uz + 0, !0),
        terrainTransparent: (zz, uz) => zz.getUint32(uz + 4, !0),
        terrainPack: (zz, uz) => zz.getUint32(uz + 8, !0),
        earthSky: (zz, uz) => zz.getUint32(uz + 12, !0),
        skyMeshes: (zz, uz) => zz.getUint32(uz + 16, !0),
        regular: (zz, uz) => zz.getUint32(uz + 20, !0),
        thin: (zz, uz) => zz.getUint32(uz + 24, !0),
        line: (zz, uz) => zz.getUint32(uz + 28, !0),
        text: (zz, uz) => zz.getUint32(uz + 32, !0),
        particles: (zz, uz) => zz.getUint32(uz + 36, !0)
      },
      bb = {
        BYTES: 16,
        fov: (zz, uz) => zz.getFloat32(uz + 0, !0),
        baseFov: (zz, uz) => zz.getFloat32(uz + 4, !0),
        aspect: (zz, uz) => zz.getFloat32(uz + 8, !0),
        bodyHeading: (zz, uz) => zz.getFloat32(uz + 12, !0)
      },
      Eb = {
        BYTES: 32,
        eye: (zz, uz, bz) => zz.getFloat64(uz + 0 + 8 * bz, !0),
        heading: (zz, uz) => zz.getFloat32(uz + 24, !0),
        pitch: (zz, uz) => zz.getFloat32(uz + 28, !0)
      },
      nb = {
        BYTES: 40,
        feet: (zz, uz, bz) => zz.getFloat64(uz + 0 + 8 * bz, !0),
        eyeHeight: (zz, uz) => zz.getFloat32(uz + 24, !0),
        heading: (zz, uz) => zz.getFloat32(uz + 28, !0),
        headingIsDrawn: (zz, uz) => zz.getUint32(uz + 32, !0)
      },
      ib = 32,
      lb = 63,
      Mb = {
        TickEnd: 32,
        EntitySpawned: 33,
        EntityDespawned: 34,
        ChangeBlockFail: 39,
        ChangeBlockFailEnd: 46,
        InventoryEvent: 48,
        HeldItemChanged: 49,
        ShotDamage: 50,
        EnchantOffer: 51,
        UiEvent: 52,
        EntityInfoChanged: 53,
        ChunkSlot: 55,
        PlaySound: 40,
        SoundPos: 41,
        SoundSet: 42,
        SoundFade: 43,
        SoundStop: 44,
        SoundReset: 45,
        ReplayFailed: 56,
        ReplayOption: 57,
        ReplayFilePart: 58,
        ReplayFileReady: 59,
        ReplayOpened: 60,
        ReplayUiEvent: 61,
        RecorderEvent: 62
      };

    function tb(zz, uz, bz, Ez, nz) {
      var iz, lz, Mz, tz, Hz, Oz, pz, dz, Fz, Zz, Rz, Kz, wz, Xz, fz, sz, rz, oz, Nz, vz, xz, Jz, Az, Tz, Lz;
      switch (zz) {
        case 32:
          return 4 === Ez && (null === (iz = nz.tickEnd) || void 0 === iz || iz.call(nz, wu.sd(uz, bz)), !0);
        case 33:
          return 12 === Ez && (null === (lz = nz.entitySpawned) || void 0 === lz || lz.call(nz, Xu.serverId(uz, bz), Xu.index(uz, bz), Xu.kind(uz, bz)), !0);
        case 34:
          return 12 === Ez && (null === (Mz = nz.entityDespawned) || void 0 === Mz || Mz.call(nz, Xu.serverId(uz, bz), Xu.index(uz, bz), Xu.kind(uz, bz)), !0);
        case 39:
          return !(Ez < 20) && (null === (tz = nz.changeBlockFail) || void 0 === tz || tz.call(nz, fu.pos(uz, bz, 0), fu.pos(uz, bz, 1), fu.pos(uz, bz, 2), fu.actual(uz, bz), fu.dataLen(uz, bz), bz + 20, Ez - 20), !0);
        case 46:
          return 0 === Ez && (null === (Hz = nz.changeBlockFailEnd) || void 0 === Hz || Hz.call(nz), !0);
        case 48:
          return 20 === Ez && (null === (Oz = nz.inventoryEvent) || void 0 === Oz || Oz.call(nz, su.what(uz, bz), su.value(uz, bz), su.pos(uz, bz, 0), su.pos(uz, bz, 1), su.pos(uz, bz, 2), su.block(uz, bz)), !0);
        case 49:
          return 4 === Ez && (null === (pz = nz.heldItemChanged) || void 0 === pz || pz.call(nz, ru.item(uz, bz), ru.slot(uz, bz)), !0);
        case 50:
          return 16 === Ez && (null === (dz = nz.shotDamage) || void 0 === dz || dz.call(nz, ou.target(uz, bz), ou.damage(uz, bz), ou.distance(uz, bz), ou.crit(uz, bz)), !0);
        case 51:
          return !(Ez < 4) && (null === (Fz = nz.enchantOffer) || void 0 === Fz || Fz.call(nz, Nu.slot(uz, bz), bz + 4, Ez - 4), !0);
        case 52:
          return !(Ez < 20) && (null === (Zz = nz.uiEvent) || void 0 === Zz || Zz.call(nz, vu.what(uz, bz), vu.value(uz, bz), vu.pos(uz, bz, 0), vu.pos(uz, bz, 1), vu.pos(uz, bz, 2), vu.block(uz, bz), bz + 20, Ez - 20), !0);
        case 53:
          return 12 === Ez && (null === (Rz = nz.entityInfoChanged) || void 0 === Rz || Rz.call(nz, xu.serverId(uz, bz), xu.index(uz, bz), xu.what(uz, bz)), !0);
        case 55:
          return 24 === Ez && (null === (Kz = nz.chunkSlot) || void 0 === Kz || Kz.call(nz, Ju.cx(uz, bz), Ju.cy(uz, bz), Ju.cz(uz, bz), Ju.slot(uz, bz), Ju.generation(uz, bz), Ju.flags(uz, bz)), !0);
        case 40:
          return 44 === Ez && (null === (wz = nz.playSound) || void 0 === wz || wz.call(nz, Au.pos(uz, bz, 0), Au.pos(uz, bz, 1), Au.pos(uz, bz, 2), Au.sound(uz, bz), Au.flags(uz, bz), Au.handle(uz, bz), Au.volume(uz, bz), Au.rate(uz, bz), Au.refDist(uz, bz)), !0);
        case 41:
          return 28 === Ez && (null === (Xz = nz.soundPos) || void 0 === Xz || Xz.call(nz, Tu.pos(uz, bz, 0), Tu.pos(uz, bz, 1), Tu.pos(uz, bz, 2), Tu.handle(uz, bz)), !0);
        case 42:
          return 16 === Ez && (null === (fz = nz.soundSet) || void 0 === fz || fz.call(nz, Lu.handle(uz, bz), Lu.volume(uz, bz), Lu.rate(uz, bz), Lu.refDist(uz, bz)), !0);
        case 43:
          return 12 === Ez && (null === (sz = nz.soundFade) || void 0 === sz || sz.call(nz, Pu.handle(uz, bz), Pu.to(uz, bz), Pu.ms(uz, bz), Pu.flags(uz, bz)), !0);
        case 44:
          return 4 === Ez && (null === (rz = nz.soundStop) || void 0 === rz || rz.call(nz, Gu.handle(uz, bz)), !0);
        case 45:
          return 0 === Ez && (null === (oz = nz.soundReset) || void 0 === oz || oz.call(nz), !0);
        case 56:
          return 4 === Ez && (null === (Nz = nz.replayFailed) || void 0 === Nz || Nz.call(nz, au.reason(uz, bz), au.code(uz, bz)), !0);
        case 57:
          return !(Ez < 4) && (null === (vz = nz.replayOption) || void 0 === vz || vz.call(nz, Vu.key(uz, bz), Vu.tag(uz, bz), bz + 4, Ez - 4), !0);
        case 58:
          return 16 === Ez && (null === (xz = nz.replayFilePart) || void 0 === xz || xz.call(nz, mu.save(uz, bz), mu.index(uz, bz), mu.ptr(uz, bz), mu.len(uz, bz)), !0);
        case 59:
          return 16 === Ez && (null === (Jz = nz.replayFileReady) || void 0 === Jz || Jz.call(nz, qu.save(uz, bz), qu.kind(uz, bz), qu.parts(uz, bz), qu.bytes(uz, bz)), !0);
        case 60:
          return !(Ez < 4) && (null === (Az = nz.replayOpened) || void 0 === Az || Az.call(nz, hu.totalTicks(uz, bz), bz + 4, Ez - 4), !0);
        case 61:
          return !(Ez < 24) && (null === (Tz = nz.replayUiEvent) || void 0 === Tz || Tz.call(nz, Uu.what(uz, bz), Uu.int(uz, bz), Uu.x(uz, bz), Uu.y(uz, bz), bz + 24, Ez - 24), !0);
        case 62:
          return 8 === Ez && (null === (Lz = nz.recorderEvent) || void 0 === Lz || Lz.call(nz, cu.what(uz, bz), cu.kind(uz, bz), cu.save(uz, bz)), !0);
        default:
          return !1
      }
    }
    const Hb = {
      SetChunkAddDistance: 2,
      WatchEntityInfo: 66,
      EventResync: 67,
      WatchPromptPick: 68,
      SetLocalDbId: 69,
      SetAltVeto: 128,
      EnchantOfferRequest: 130,
      ClearPickupDelay: 131,
      SyncOpMarker: 132,
      SetHooks: 133,
      SetPublicLobby: 144,
      ClickCodeBlock: 145,
      Send: 256,
      Leave: 257,
      SetPaused: 258,
      ParticleBurst: 320,
      ParticleStart: 321,
      ParticleUpdate: 322,
      ParticleStop: 323,
      ParticleEmitPoints: 324,
      ParticleStopAll: 325,
      InstancePool: 384,
      InstanceCommit: 385,
      GameMeshCreate: 386,
      GameMeshSet: 387,
      GameMeshDispose: 388,
      SetNametagOffset: 389,
      SetFacingTolerance: 390,
      SetGroundArrowStyle: 391,
      InstancePoolDispose: 392,
      MobModel: 393,
      MobModelSet: 394,
      MobModelDispose: 398,
      ThirdPersonFor: 448,
      FreecamMove: 450,
      ScriptedRelease: 451,
      SetZoom: 452,
      SwapZoom: 453,
      FreecamCmd: 454,
      SecondCentres: 455,
      SetCameraFar: 456,
      HighlightCell: 457,
      RecorderOption: 530,
      RecorderFlyingText: 531,
      RecorderPlayerKilled: 532,
      RecorderKillfeed: 533,
      Respawn: 576,
      BindCustomButtonKeys: 577,
      PressCustomButton: 578,
      PadMove: 579
    };
    let Ob = new Uint8Array(0);

    function pb(zz) {
      return Ob.buffer !== zz.buffer && (Ob = new Uint8Array(zz.buffer)), Ob
    }

    function db(zz, uz, bz) {
      const Ez = zz.QF(66, uz, 4);
      if (Ez < 0) return !1;
      return zz.view.setUint8(Ez + 0, bz), !0
    }

    function Fb(zz, uz, bz) {
      const Ez = zz.QF(67, uz, 4);
      if (Ez < 0) return !1;
      return zz.view.setUint32(Ez + 0, bz, !0), !0
    }

    function Zb(zz, uz, bz) {
      const Ez = zz.QF(68, uz, 4);
      if (Ez < 0) return !1;
      return zz.view.setUint8(Ez + 0, bz), !0
    }

    function Rb(zz, uz, bz, Ez) {
      const nz = zz.QF(69, uz, 4 + Ez.length);
      if (nz < 0) return !1;
      const iz = zz.view;
      return iz.setUint8(nz + 0, bz), pb(iz).set(Ez, iz.byteOffset + nz + 4), !0
    }

    function Kb(zz, uz, bz, Ez, nz) {
      const iz = zz.QF(128, uz, 4 + nz.length);
      if (iz < 0) return !1;
      const lz = zz.view;
      return lz.setUint8(iz + 0, bz), lz.setUint16(iz + 2, Ez, !0), pb(lz).set(nz, lz.byteOffset + iz + 4), !0
    }

    function wb(zz, uz, bz) {
      const Ez = zz.QF(131, uz, 4);
      if (Ez < 0) return !1;
      return zz.view.setInt32(Ez + 0, bz, !0), !0
    }

    function Xb(zz, uz, bz) {
      const Ez = zz.QF(132, uz, 4);
      if (Ez < 0) return !1;
      return zz.view.setUint32(Ez + 0, bz, !0), !0
    }

    function fb(zz, uz, bz) {
      const Ez = zz.QF(133, uz, 4);
      if (Ez < 0) return !1;
      return zz.view.setUint32(Ez + 0, bz, !0), !0
    }

    function sb(zz, uz, bz) {
      const Ez = zz.QF(144, uz, 4);
      if (Ez < 0) return !1;
      return zz.view.setUint8(Ez + 0, bz), !0
    }

    function rb(zz, uz, bz, Ez, nz) {
      const iz = zz.QF(145, uz, 12);
      if (iz < 0) return !1;
      const lz = zz.view;
      return lz.setInt32(iz + 0, bz, !0), lz.setInt32(iz + 4, Ez, !0), lz.setInt32(iz + 8, nz, !0), !0
    }

    function ob(zz, uz, bz, Ez) {
      const nz = zz.QF(256, uz, 4 + Ez.length);
      if (nz < 0) return !1;
      const iz = zz.view;
      return iz.setUint16(nz + 0, bz, !0), pb(iz).set(Ez, iz.byteOffset + nz + 4), !0
    }

    function Nb(zz, uz, bz) {
      const Ez = zz.QF(258, uz, 4);
      if (Ez < 0) return !1;
      return zz.view.setUint8(Ez + 0, bz), !0
    }

    function vb(zz, uz, bz, Ez, nz, iz, lz, Mz, tz) {
      const Hz = zz.QF(320, uz, 48 + tz.length);
      if (Hz < 0) return !1;
      const Oz = zz.view;
      Oz.setUint32(Hz + 0, bz, !0), Oz.setUint16(Hz + 4, Ez, !0), Oz.setUint16(Hz + 6, nz, !0), Oz.setUint32(Hz + 8, iz, !0);
      for (let pz = 0; pz < 3; pz++) Oz.setFloat64(Hz + 12 + 8 * pz, lz[pz], !0);
      for (let pz = 0; pz < 3; pz++) Oz.setFloat32(Hz + 36 + 4 * pz, Mz[pz], !0);
      return pb(Oz).set(tz, Oz.byteOffset + Hz + 48), !0
    }

    function xb(zz, uz, bz, Ez, nz, iz, lz, Mz, tz) {
      const Hz = zz.QF(321, uz, 48 + tz.length);
      if (Hz < 0) return !1;
      const Oz = zz.view;
      Oz.setUint32(Hz + 0, bz, !0), Oz.setInt32(Hz + 4, Ez, !0), Oz.setUint16(Hz + 8, nz, !0), Oz.setUint16(Hz + 10, iz, !0);
      for (let pz = 0; pz < 3; pz++) Oz.setFloat64(Hz + 12 + 8 * pz, lz[pz], !0);
      for (let pz = 0; pz < 3; pz++) Oz.setFloat32(Hz + 36 + 4 * pz, Mz[pz], !0);
      return pb(Oz).set(tz, Oz.byteOffset + Hz + 48), !0
    }

    function Jb(zz, uz, bz, Ez, nz, iz, lz) {
      const Mz = zz.QF(322, uz, 44 + lz.length);
      if (Mz < 0) return !1;
      const tz = zz.view;
      tz.setUint32(Mz + 0, bz, !0), tz.setUint32(Mz + 4, Ez, !0);
      for (let Hz = 0; Hz < 3; Hz++) tz.setFloat64(Mz + 8 + 8 * Hz, nz[Hz], !0);
      for (let Hz = 0; Hz < 3; Hz++) tz.setFloat32(Mz + 32 + 4 * Hz, iz[Hz], !0);
      return pb(tz).set(lz, tz.byteOffset + Mz + 44), !0
    }

    function Ab(zz, uz, bz) {
      const Ez = zz.QF(323, uz, 4);
      if (Ez < 0) return !1;
      return zz.view.setUint32(Ez + 0, bz, !0), !0
    }

    function Tb(zz, uz, bz, Ez, nz, iz) {
      const lz = zz.QF(324, uz, 32 + iz.length);
      if (lz < 0) return !1;
      const Mz = zz.view;
      Mz.setUint32(lz + 0, bz, !0), Mz.setUint32(lz + 4, Ez, !0);
      for (let tz = 0; tz < 3; tz++) Mz.setFloat64(lz + 8 + 8 * tz, nz[tz], !0);
      return pb(Mz).set(iz, Mz.byteOffset + lz + 32), !0
    }

    function Lb(zz, uz) {
      return !(zz.QF(325, uz, 0) < 0)
    }

    function Pb(zz, uz, bz, Ez, nz, iz) {
      const lz = zz.QF(384, uz, 16);
      if (lz < 0) return !1;
      const Mz = zz.view;
      return Mz.setUint32(lz + 0, bz, !0), Mz.setUint32(lz + 4, Ez, !0), Mz.setFloat32(lz + 8, nz, !0), Mz.setFloat32(lz + 12, iz, !0), !0
    }

    function Gb(zz, uz, bz, Ez, nz, iz, lz) {
      const Mz = zz.QF(385, uz, 36 + lz.length);
      if (Mz < 0) return !1;
      const tz = zz.view;
      tz.setUint32(Mz + 0, bz, !0), tz.setUint32(Mz + 4, Ez, !0);
      for (let Hz = 0; Hz < 3; Hz++) tz.setFloat64(Mz + 8 + 8 * Hz, nz[Hz], !0);
      return tz.setUint32(Mz + 32, iz, !0), pb(tz).set(lz, tz.byteOffset + Mz + 36), !0
    }

    function ab(zz, uz, bz, Ez, nz, iz, lz, Mz, tz) {
      const Hz = zz.QF(386, uz, 56 + tz.length);
      if (Hz < 0) return !1;
      const Oz = zz.view;
      Oz.setUint32(Hz + 0, bz, !0), Oz.setUint8(Hz + 4, Ez);
      for (let pz = 0; pz < 4; pz++) Oz.setFloat32(Hz + 8 + 4 * pz, nz[pz], !0);
      for (let pz = 0; pz < 3; pz++) Oz.setFloat64(Hz + 24 + 8 * pz, iz[pz], !0);
      return Oz.setUint32(Hz + 48, lz, !0), Oz.setUint32(Hz + 52, Mz, !0), pb(Oz).set(tz, Oz.byteOffset + Hz + 56), !0
    }

    function Vb(zz, uz, bz, Ez, nz, iz, lz, Mz, tz) {
      const Hz = zz.QF(387, uz, 56);
      if (Hz < 0) return !1;
      const Oz = zz.view;
      Oz.setUint32(Hz + 0, bz, !0), Oz.setUint16(Hz + 4, Ez, !0), Oz.setUint8(Hz + 6, nz);
      for (let pz = 0; pz < 3; pz++) Oz.setFloat64(Hz + 8 + 8 * pz, iz[pz], !0);
      for (let pz = 0; pz < 2; pz++) Oz.setFloat32(Hz + 32 + 4 * pz, lz[pz], !0);
      Oz.setFloat32(Hz + 40, Mz, !0);
      for (let pz = 0; pz < 3; pz++) Oz.setFloat32(Hz + 44 + 4 * pz, tz[pz], !0);
      return !0
    }

    function mb(zz, uz, bz) {
      const Ez = zz.QF(388, uz, 4);
      if (Ez < 0) return !1;
      return zz.view.setUint32(Ez + 0, bz, !0), !0
    }

    function qb(zz, uz, bz, Ez) {
      const nz = zz.QF(389, uz, 8);
      if (nz < 0) return !1;
      const iz = zz.view;
      return iz.setInt32(nz + 0, bz, !0), iz.setFloat32(nz + 4, Ez, !0), !0
    }

    function hb(zz, uz, bz, Ez) {
      const nz = zz.QF(390, uz, 8);
      if (nz < 0) return !1;
      const iz = zz.view;
      return iz.setInt32(nz + 0, bz, !0), iz.setFloat32(nz + 4, Ez, !0), !0
    }

    function Ub(zz, uz, bz, Ez, nz, iz) {
      const lz = zz.QF(391, uz, 12);
      if (lz < 0) return !1;
      const Mz = zz.view;
      return Mz.setFloat32(lz + 0, bz, !0), Mz.setFloat32(lz + 4, Ez, !0), Mz.setUint8(lz + 8, nz), Mz.setUint8(lz + 9, iz), !0
    }

    function cb(zz, uz, bz) {
      const Ez = zz.QF(392, uz, 4);
      if (Ez < 0) return !1;
      return zz.view.setUint32(Ez + 0, bz, !0), !0
    }

    function gb(zz, uz, bz, Ez, nz) {
      const iz = zz.QF(393, uz, 12);
      if (iz < 0) return !1;
      const lz = zz.view;
      return lz.setUint32(iz + 0, bz, !0), lz.setUint16(iz + 4, Ez, !0), lz.setFloat32(iz + 8, nz, !0), !0
    }

    function Sb(zz, uz, bz, Ez, nz, iz, lz) {
      const Mz = zz.QF(394, uz, 36);
      if (Mz < 0) return !1;
      const tz = zz.view;
      tz.setUint32(Mz + 0, bz, !0), tz.setUint16(Mz + 4, Ez, !0), tz.setUint8(Mz + 6, nz);
      for (let Hz = 0; Hz < 3; Hz++) tz.setFloat64(Mz + 8 + 8 * Hz, iz[Hz], !0);
      return tz.setFloat32(Mz + 32, lz, !0), !0
    }

    function yb(zz, uz, bz) {
      const Ez = zz.QF(398, uz, 4);
      if (Ez < 0) return !1;
      return zz.view.setUint32(Ez + 0, bz, !0), !0
    }

    function Db(zz, uz, bz) {
      const Ez = zz.QF(448, uz, 4);
      if (Ez < 0) return !1;
      return zz.view.setFloat32(Ez + 0, bz, !0), !0
    }

    function Qb(zz, uz, bz, Ez) {
      const nz = zz.QF(450, uz, 12);
      if (nz < 0) return !1;
      const iz = zz.view;
      for (let lz = 0; lz < 2; lz++) iz.setFloat32(nz + 0 + 4 * lz, bz[lz], !0);
      return iz.setUint8(nz + 8, Ez), !0
    }

    function Wb(zz, uz, bz, Ez) {
      const nz = zz.QF(452, uz, 8);
      if (nz < 0) return !1;
      const iz = zz.view;
      return iz.setFloat32(nz + 0, bz, !0), iz.setUint8(nz + 4, Ez), !0
    }

    function eb(zz, uz, bz, Ez, nz) {
      const iz = zz.QF(454, uz, 4);
      if (iz < 0) return !1;
      const lz = zz.view;
      return lz.setUint8(iz + 0, bz), lz.setUint8(iz + 1, Ez), lz.setUint8(iz + 2, nz), !0
    }

    function jb(zz, uz, bz, Ez) {
      const nz = zz.QF(455, uz, 40);
      if (nz < 0) return !1;
      const iz = zz.view;
      for (let lz = 0; lz < 9; lz++) iz.setInt32(nz + 0 + 4 * lz, bz[lz], !0);
      return iz.setUint32(nz + 36, Ez, !0), !0
    }

    function Ib(zz, uz, bz, Ez) {
      const nz = zz.QF(456, uz, 8);
      if (nz < 0) return !1;
      const iz = zz.view;
      return iz.setFloat32(nz + 0, bz, !0), iz.setUint8(nz + 4, Ez), !0
    }

    function Bb(zz, uz, bz, Ez, nz) {
      const iz = zz.QF(457, uz, 16);
      if (iz < 0) return !1;
      const lz = zz.view;
      for (let Mz = 0; Mz < 3; Mz++) lz.setInt32(iz + 0 + 4 * Mz, bz[Mz], !0);
      for (let Mz = 0; Mz < 3; Mz++) lz.setInt8(iz + 12 + 1 * Mz, Ez[Mz]);
      return lz.setUint8(iz + 15, nz), !0
    }

    function Cb(zz, uz, bz, Ez) {
      const nz = zz.QF(530, uz, 4 + Ez.length);
      if (nz < 0) return !1;
      const iz = zz.view;
      return iz.setUint8(nz + 0, bz), pb(iz).set(Ez, iz.byteOffset + nz + 4), !0
    }

    function Yb(zz, uz, bz, Ez, nz, iz) {
      const lz = zz.QF(531, uz, 12 + iz.length);
      if (lz < 0) return !1;
      const Mz = zz.view;
      return Mz.setFloat32(lz + 0, bz, !0), Mz.setFloat32(lz + 4, Ez, !0), Mz.setUint32(lz + 8, nz, !0), pb(Mz).set(iz, Mz.byteOffset + lz + 12), !0
    }

    function kb(zz, uz, bz, Ez, nz, iz) {
      const lz = zz.QF(532, uz, 12 + iz.length);
      if (lz < 0) return !1;
      const Mz = zz.view;
      return Mz.setInt32(lz + 0, bz, !0), Mz.setInt32(lz + 4, Ez, !0), Mz.setUint32(lz + 8, nz, !0), pb(Mz).set(iz, Mz.byteOffset + lz + 12), !0
    }

    function zE(zz, uz, bz, Ez, nz) {
      const iz = zz.QF(533, uz, 8 + nz.length);
      if (iz < 0) return !1;
      const lz = zz.view;
      return lz.setInt32(iz + 0, bz, !0), lz.setInt32(iz + 4, Ez, !0), pb(lz).set(nz, lz.byteOffset + iz + 8), !0
    }

    function uE(zz, uz) {
      return !(zz.QF(576, uz, 0) < 0)
    }

    function bE(zz, uz, bz, Ez, nz, iz) {
      const lz = zz.QF(577, uz, 36 + iz.length);
      if (lz < 0) return !1;
      const Mz = zz.view;
      Mz.setUint8(lz + 0, bz);
      for (let tz = 0; tz < 16; tz++) Mz.setUint8(lz + 4 + 1 * tz, Ez[tz]);
      for (let tz = 0; tz < 16; tz++) Mz.setUint8(lz + 20 + 1 * tz, nz[tz]);
      return pb(Mz).set(iz, Mz.byteOffset + lz + 36), !0
    }

    function EE(zz, uz, bz, Ez) {
      const nz = zz.QF(578, uz, 4 + Ez.length);
      if (nz < 0) return !1;
      const iz = zz.view;
      return iz.setUint8(nz + 0, bz), pb(iz).set(Ez, iz.byteOffset + nz + 4), !0
    }

    function nE(zz, uz, bz, Ez, nz, iz, lz, Mz) {
      const tz = zz.QF(579, uz, 36);
      if (tz < 0) return !1;
      const Hz = zz.view;
      return Hz.setFloat64(tz + 0, bz, !0), Hz.setFloat64(tz + 8, Ez, !0), Hz.setFloat64(tz + 16, nz, !0), Hz.setFloat64(tz + 24, iz, !0), Hz.setUint16(tz + 32, lz, !0), Hz.setUint8(tz + 34, Mz), !0
    }
    class iE {
      constructor(zz, uz) {
        this.core = zz, this.afterCall = uz
      }
      canModify(zz, uz, bz) {
        const Ez = this.core.Vnz(zz, uz, bz);
        return this.afterCall(), Ez
      }
      terrainBlocked(zz, uz, bz, Ez, nz) {
        const iz = this.core.Aiz(zz, uz, bz, Ez, nz);
        return this.afterCall(), iz
      }
      qJ(zz, uz, bz, Ez) {
        const nz = this.core.LF(zz, uz, bz, Ez);
        return this.afterCall(), nz
      }
      blockData(zz, uz, bz) {
        const Ez = this.core.Gnz(zz, uz, bz);
        return this.afterCall(), Ez
      }
      cameraSweep(zz, uz, bz, Ez, nz, iz, lz) {
        const Mz = this.core.aEz(zz, uz, bz, Ez, nz, iz, lz);
        return this.afterCall(), Mz
      }
      hasServerTarget(zz) {
        const uz = this.core.jnz(zz);
        return this.afterCall(), uz
      }
      entityInteractable(zz) {
        const uz = this.core.Snz(zz);
        return this.afterCall(), uz
      }
      entityCrouching(zz) {
        const uz = this.core.gnz(zz);
        return this.afterCall(), uz
      }
      predictServerPosition(zz, uz, bz, Ez) {
        const nz = this.core.Miz(zz, uz, bz, Ez);
        return this.afterCall(), nz
      }
      setOtherEntitySetting(zz, uz, bz) {
        const Ez = this.core.UEz(zz, uz, bz);
        return this.afterCall(), Ez
      }
      entityInfoBatch(zz) {
        const uz = this.core.SEz(zz);
        return this.afterCall(), uz
      }
      entityName(zz) {
        const uz = this.core.ynz(zz);
        return this.afterCall(), uz
      }
      hasEffect(zz, uz) {
        const bz = this.core.Wnz(zz, uz);
        return this.afterCall(), bz
      }
      scratchPtr() {
        const zz = this.core.LEz();
        return this.afterCall(), zz
      }
      invSwap(zz, uz) {
        const bz = this.core.ziz(zz, uz);
        return this.afterCall(), bz
      }
      invMove(zz, uz, bz) {
        const Ez = this.core.Cnz(zz, uz, bz);
        return this.afterCall(), Ez
      }
      invQuickMove(zz, uz, bz, Ez) {
        const nz = this.core.Ynz(zz, uz, bz, Ez);
        return this.afterCall(), nz
      }
      invRemove(zz, uz, bz) {
        const Ez = this.core.knz(zz, uz, bz);
        return this.afterCall(), Ez
      }
      invEnchant(zz, uz, bz, Ez, nz) {
        const iz = this.core.Bnz(zz, uz, bz, Ez, nz);
        return this.afterCall(), iz
      }
      craft(zz, uz, bz) {
        const Ez = this.core.craft(zz, uz, bz);
        return this.afterCall(), Ez
      }
      salvage(zz, uz, bz) {
        const Ez = this.core.salvage(zz, uz, bz);
        return this.afterCall(), Ez
      }
      selectSlot(zz) {
        const uz = this.core.piz(zz);
        return this.afterCall(), uz
      }
      closeChest() {
        const zz = this.core.mnz();
        return this.afterCall(), zz
      }
      itemAttributesBatch(zz) {
        const uz = this.core.gEz(zz);
        return this.afterCall(), uz
      }
      itemNames() {
        const zz = this.core.Dv();
        return this.afterCall(), zz
      }
      blockProps() {
        const zz = this.core.anz();
        return this.afterCall(), zz
      }
      itemProps() {
        const zz = this.core.uiz();
        return this.afterCall(), zz
      }
      salvageRecipe(zz) {
        const uz = this.core.DEz(zz);
        return this.afterCall(), uz
      }
      craftingView(zz, uz, bz) {
        const Ez = this.core.cEz(zz, uz, bz);
        return this.afterCall(), Ez
      }
      directorView() {
        const zz = this.core.GEz();
        return this.afterCall(), zz
      }
      directorDefaultPose() {
        const zz = this.core.VEz();
        return this.afterCall(), zz
      }
      directorEntity(zz) {
        const uz = this.core.mEz(zz);
        return this.afterCall(), uz
      }
      directorPose(zz, uz, bz, Ez, nz, iz) {
        const lz = this.core.qEz(zz, uz, bz, Ez, nz, iz);
        return this.afterCall(), lz
      }
      passTimings(zz) {
        const uz = this.core.iiz(zz);
        return this.afterCall(), uz
      }
      drawCensus() {
        const zz = this.core.cnz();
        return this.afterCall(), zz
      }
    }
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);