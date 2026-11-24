export const id = 273;
export const ids = [273];
export const modules = {
  40682: (BB, jB, zB) => {
    zB.d(jB, {
      $b: () => Bz,
      $c: () => Uj,
      $d: () => xj,
      Ae: () => zQ,
      Ag: () => Mz,
      B: () => Kj,
      Bf: () => Hz,
      Cg: () => gz,
      D: () => rB,
      Db: () => TB,
      Dc: () => LB,
      Dd: () => SB,
      E: () => nj,
      Ee: () => kz,
      Eg: () => xz,
      F: () => fB,
      Ff: () => fz,
      Gb: () => zz,
      Gc: () => aj,
      Hd: () => VB,
      He: () => tz,
      Ig: () => Gz,
      J: () => HB,
      Jc: () => UB,
      Jd: () => YB,
      Jf: () => qz,
      Jg: () => lz,
      Kb: () => jz,
      Kc: () => wj,
      Kd: () => XB,
      Le: () => sz,
      Lf: () => QQ,
      N: () => oB,
      Nb: () => sj,
      Nc: () => WB,
      Ng: () => rz,
      Ob: () => Nj,
      Od: () => hB,
      Oe: () => Kz,
      Pb: () => nB,
      Pc: () => xB,
      Pf: () => Rz,
      Pg: () => Jz,
      Q: () => ej,
      Qc: () => Cj,
      Qd: () => Jj,
      Qe: () => wz,
      Sb: () => kB,
      Sd: () => uB,
      Sf: () => BQ,
      T: () => sB,
      Te: () => Yz,
      Uc: () => Qj,
      Uf: () => vz,
      Ve: () => hz,
      Wb: () => Gj,
      Wd: () => aB,
      We: () => Vz,
      Wf: () => Oz,
      X: () => lB,
      Yb: () => bB,
      Yc: () => pj,
      Yf: () => jQ,
      Ze: () => bz,
      _: () => dQ,
      _c: () => qB,
      _d: () => yj,
      _e: () => Fz,
      ad: () => uj,
      ag: () => Cz,
      bc: () => DB,
      bf: () => Tz,
      c: () => dB,
      cb: () => Oj,
      dd: () => zj,
      de: () => PB,
      e: () => IB,
      eb: () => cB,
      ec: () => RB,
      eg: () => Sz,
      fc: () => vB,
      fd: () => iB,
      fe: () => rj,
      ff: () => Dz,
      g: () => MB,
      gg: () => yz,
      hd: () => gB,
      hf: () => ez,
      hg: () => cz,
      ib: () => vj,
      if: () => Wz,
      jc: () => jj,
      je: () => cj,
      k: () => ZB,
      kb: () => Rj,
      kd: () => QB,
      ld: () => EB,
      le: () => Pj,
      lg: () => Zz,
      mb: () => CB,
      mc: () => mj,
      mf: () => Pz,
      n: () => Uz,
      nd: () => Ij,
      ne: () => Bj,
      oe: () => OB,
      of: () => nQ,
      og: () => Az,
      pc: () => KB,
      q: () => Nz,
      qb: () => bj,
      qd: () => yB,
      rc: () => FB,
      re: () => eB,
      s: () => NB,
      sd: () => mB,
      sf: () => Ez,
      sg: () => Lz,
      tb: () => AB,
      td: () => JB,
      tf: () => oz,
      ue: () => tB,
      vb: () => Qz,
      vc: () => dj,
      vd: () => dz,
      w: () => Wj,
      we: () => pB,
      wg: () => mz,
      xf: () => iz,
      xg: () => Xz,
      y: () => lj,
      ye: () => uz,
      z: () => wB,
      zb: () => nz,
      zc: () => GB,
      zd: () => Iz
    });
    const QB = -2147483648,
      nB = 12,
      dB = 12,
      IB = 4095,
      NB = {
        Lifeform: 1,
        Throwable: 2,
        Mesh: 3,
        Audio: 4,
        Item: 5
      },
      uB = {
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
      UB = {
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
      aB = {
        Off: 0,
        Key: 1,
        Touch: 2
      },
      pB = {
        Alive: 16
      },
      rB = 32,
      sB = {
        Stored: 1,
        Unloaded: 2,
        ResetAll: 4
      },
      JB = {
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
      mB = 4294967295,
      yB = 0,
      kB = 4294967295,
      GB = 4,
      LB = 123,
      gB = -2147483648,
      tB = {
        Off: 0,
        All: 1,
        Filter: 2
      },
      SB = 51,
      MB = 5,
      EB = 4294967295,
      iB = 4294967295,
      qB = 128,
      fB = ["Workbench", "Furnace", "Artisan Bench", "Potion Table", "Salvaging Table", "Enchanting Table"],
      oB = 16,
      HB = 255,
      DB = {
        Off: 0,
        On: 1,
        Keep: 2
      },
      FB = {
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
      YB = {
        Hotbar: 256,
        Drop: 257
      },
      VB = {
        Down: 1,
        Next: 2,
        Stack: 4,
        Repeat: 8
      },
      hB = {
        Rate: 0,
        Gyro: 1
      },
      XB = {
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
      ZB = {
        Prevent: 0,
        Allow: 1,
        PreventPlacement: 2
      },
      AB = {
        None: 0,
        Pose: 1,
        FaceMovement: 2,
        FaceCamera: 3,
        FaceCursor: 4
      },
      TB = {
        LookPointed: 1,
        Held: 2
      },
      PB = 3,
      WB = {
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
      eB = {
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
      lB = {
        Alt: 1,
        Up: 2,
        HasPos: 4,
        AttackOnly: 8
      },
      wB = {
        Solid: 1,
        Fluid: 2,
        PlaceOver: 4
      },
      xB = {
        Stackable: 1
      },
      KB = {
        granule: 1,
        wood: 2,
        rock: 3,
        cuttable: 4
      },
      CB = {
        Detail: 1,
        RoomForOne: 2
      },
      cB = {
        HaveIngredients: 1,
        Listed: 2
      },
      bB = {
        HasOpts: 1
      },
      vB = {
        Flat: 0,
        Chevrons: 1,
        FurnaceFire: 2,
        FlatOpaque: 3,
        FlatOnTop: 4
      },
      RB = {
        Up: 1,
        Down: 2
      },
      OB = {
        TwoD: 1,
        Loop: 2
      },
      Bj = {
        StopAfter: 1
      },
      jj = {
        Anchor: 1,
        Visible: 2,
        UvOffset: 4,
        Visibility: 8,
        Scale: 16
      },
      zj = {
        Pose: 1,
        Visible: 2
      },
      Qj = 255,
      nj = 65535,
      dj = 255,
      Ij = 65535,
      Nj = ["standing", "sitting", "zombie", "gliding", "driving", "sleeping", "riding"],
      uj = ["", "Sheared", "Saddled", "Antlers", "skyblockHeldBoss"],
      Uj = ["Box", "BloxdBlock", "Person", "Leaderboard", "ParticleEmitter"],
      aj = {
        Bytes: 16,
        Hidden: 2147483648,
        Max: 262144
      },
      pj = 4294967295,
      rj = 4294967295,
      sj = 255,
      Jj = {
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
      mj = {
        critical: 123
      },
      yj = 4294967295,
      kj = {
        BYTES: 4,
        vp: (BB, jB) => BB.getUint32(jB + 0, !0)
      },
      Gj = {
        BYTES: 12,
        serverId: (BB, jB) => BB.getInt32(jB + 0, !0),
        index: (BB, jB) => BB.getUint32(jB + 4, !0),
        kind: (BB, jB) => BB.getUint16(jB + 8, !0)
      },
      Lj = {
        BYTES: 20,
        pos: (BB, jB, zB) => BB.getInt32(jB + 0 + 4 * zB, !0),
        actual: (BB, jB) => BB.getUint32(jB + 12, !0),
        dataLen: (BB, jB) => BB.getUint32(jB + 16, !0)
      },
      gj = {
        BYTES: 20,
        what: (BB, jB) => BB.getUint8(jB + 0),
        value: (BB, jB) => BB.getInt16(jB + 2, !0),
        pos: (BB, jB, zB) => BB.getInt32(jB + 4 + 4 * zB, !0),
        block: (BB, jB) => BB.getUint32(jB + 16, !0)
      },
      tj = {
        BYTES: 4,
        item: (BB, jB) => BB.getUint16(jB + 0, !0),
        slot: (BB, jB) => BB.getUint8(jB + 2)
      },
      Sj = {
        BYTES: 16,
        target: (BB, jB) => BB.getInt32(jB + 0, !0),
        damage: (BB, jB) => BB.getFloat32(jB + 4, !0),
        distance: (BB, jB) => BB.getFloat32(jB + 8, !0),
        crit: (BB, jB) => BB.getUint8(jB + 12)
      },
      Mj = {
        BYTES: 4,
        slot: (BB, jB) => BB.getUint16(jB + 0, !0)
      },
      Ej = {
        BYTES: 20,
        what: (BB, jB) => BB.getUint8(jB + 0),
        value: (BB, jB) => BB.getInt16(jB + 2, !0),
        pos: (BB, jB, zB) => BB.getInt32(jB + 4 + 4 * zB, !0),
        block: (BB, jB) => BB.getUint32(jB + 16, !0)
      },
      ij = {
        BYTES: 12,
        serverId: (BB, jB) => BB.getInt32(jB + 0, !0),
        index: (BB, jB) => BB.getUint32(jB + 4, !0),
        what: (BB, jB) => BB.getUint16(jB + 8, !0)
      },
      qj = {
        BYTES: 24,
        cx: (BB, jB) => BB.getInt32(jB + 0, !0),
        cy: (BB, jB) => BB.getInt32(jB + 4, !0),
        cz: (BB, jB) => BB.getInt32(jB + 8, !0),
        slot: (BB, jB) => BB.getUint32(jB + 12, !0),
        generation: (BB, jB) => BB.getUint32(jB + 16, !0),
        flags: (BB, jB) => BB.getUint32(jB + 20, !0)
      },
      fj = {
        BYTES: 44,
        pos: (BB, jB, zB) => BB.getFloat64(jB + 0 + 8 * zB, !0),
        sound: (BB, jB) => BB.getUint16(jB + 24, !0),
        flags: (BB, jB) => BB.getUint16(jB + 26, !0),
        handle: (BB, jB) => BB.getUint32(jB + 28, !0),
        volume: (BB, jB) => BB.getFloat32(jB + 32, !0),
        rate: (BB, jB) => BB.getFloat32(jB + 36, !0),
        refDist: (BB, jB) => BB.getFloat32(jB + 40, !0)
      },
      oj = {
        BYTES: 28,
        pos: (BB, jB, zB) => BB.getFloat64(jB + 0 + 8 * zB, !0),
        handle: (BB, jB) => BB.getUint32(jB + 24, !0)
      },
      Hj = {
        BYTES: 16,
        handle: (BB, jB) => BB.getUint32(jB + 0, !0),
        volume: (BB, jB) => BB.getFloat32(jB + 4, !0),
        rate: (BB, jB) => BB.getFloat32(jB + 8, !0),
        refDist: (BB, jB) => BB.getFloat32(jB + 12, !0)
      },
      Dj = {
        BYTES: 12,
        handle: (BB, jB) => BB.getUint32(jB + 0, !0),
        to: (BB, jB) => BB.getFloat32(jB + 4, !0),
        ms: (BB, jB) => BB.getUint16(jB + 8, !0),
        flags: (BB, jB) => BB.getUint16(jB + 10, !0)
      },
      Fj = {
        BYTES: 4,
        handle: (BB, jB) => BB.getUint32(jB + 0, !0)
      },
      Yj = {
        BYTES: 8,
        reason: (BB, jB) => BB.getUint8(jB + 0),
        code: (BB, jB) => BB.getUint8(jB + 1),
        version: (BB, jB) => BB.getUint32(jB + 4, !0)
      },
      Vj = {
        BYTES: 4,
        key: (BB, jB) => BB.getUint8(jB + 0),
        tag: (BB, jB) => BB.getUint8(jB + 1)
      },
      hj = {
        BYTES: 16,
        save: (BB, jB) => BB.getUint32(jB + 0, !0),
        index: (BB, jB) => BB.getUint32(jB + 4, !0),
        ptr: (BB, jB) => BB.getUint32(jB + 8, !0),
        len: (BB, jB) => BB.getUint32(jB + 12, !0)
      },
      Xj = {
        BYTES: 16,
        save: (BB, jB) => BB.getUint32(jB + 0, !0),
        kind: (BB, jB) => BB.getUint8(jB + 4),
        parts: (BB, jB) => BB.getUint32(jB + 8, !0),
        bytes: (BB, jB) => BB.getUint32(jB + 12, !0)
      },
      Zj = {
        BYTES: 4,
        totalTicks: (BB, jB) => BB.getUint32(jB + 0, !0)
      },
      Aj = {
        BYTES: 24,
        what: (BB, jB) => BB.getUint8(jB + 0),
        int: (BB, jB) => BB.getInt32(jB + 4, !0),
        x: (BB, jB) => BB.getFloat64(jB + 8, !0),
        y: (BB, jB) => BB.getFloat64(jB + 16, !0)
      },
      Tj = {
        BYTES: 8,
        what: (BB, jB) => BB.getUint8(jB + 0),
        kind: (BB, jB) => BB.getUint8(jB + 1),
        save: (BB, jB) => BB.getUint32(jB + 4, !0)
      },
      Pj = {
        BYTES: 4,
        ha: (BB, jB) => BB.getUint16(jB + 0, !0)
      },
      Wj = {
        BYTES: 360,
        eye: (BB, jB, zB) => BB.getFloat64(jB + 0 + 8 * zB, !0),
        localPos: (BB, jB, zB) => BB.getFloat64(jB + 24 + 8 * zB, !0),
        YBB: (BB, jB, zB) => BB.getFloat64(jB + 48 + 8 * zB, !0),
        viewProj: (BB, jB, zB) => BB.getFloat32(jB + 72 + 4 * zB, !0),
        origin: (BB, jB, zB) => BB.getInt32(jB + 136 + 4 * zB, !0),
        heading: (BB, jB) => BB.getFloat32(jB + 148, !0),
        pitch: (BB, jB) => BB.getFloat32(jB + 152, !0),
        tanHalfFovX: (BB, jB) => BB.getFloat32(jB + 156, !0),
        tanHalfFovY: (BB, jB) => BB.getFloat32(jB + 160, !0),
        viewportCss: (BB, jB, zB) => BB.getFloat32(jB + 164 + 4 * zB, !0),
        localVel: (BB, jB, zB) => BB.getFloat32(jB + 172 + 4 * zB, !0),
        actionDir: (BB, jB, zB) => BB.getFloat32(jB + 184 + 4 * zB, !0),
        localId: (BB, jB) => BB.getInt32(jB + 196, !0),
        playerFlags: (BB, jB) => BB.getUint32(jB + 200, !0),
        targetBlock: (BB, jB, zB) => BB.getInt32(jB + 204 + 4 * zB, !0),
        targetAdjacent: (BB, jB, zB) => BB.getInt32(jB + 216 + 4 * zB, !0),
        targetBlockId: (BB, jB) => BB.getUint32(jB + 228, !0),
        targetNormal: (BB, jB, zB) => BB.getInt8(jB + 232 + 1 * zB),
        targetFlags: (BB, jB) => BB.getUint8(jB + 235),
        pickedEntity: (BB, jB) => BB.getInt32(jB + 236, !0),
        breakingPos: (BB, jB, zB) => BB.getInt32(jB + 240 + 4 * zB, !0),
        breakingProgress: (BB, jB) => BB.getFloat32(jB + 252, !0),
        kS: (BB, jB) => BB.getUint16(jB + 256, !0),
        selectedSlot: (BB, jB) => BB.getUint8(jB + 258),
        heldFlags: (BB, jB) => BB.getUint8(jB + 259),
        heldAttrVersion: (BB, jB) => BB.getUint32(jB + 260, !0),
        inventoryVersion: (BB, jB) => BB.getUint32(jB + 264, !0),
        effectsVersion: (BB, jB) => BB.getUint32(jB + 268, !0),
        entitiesVersion: (BB, jB) => BB.getUint32(jB + 272, !0),
        entRenderPtr: (BB, jB) => BB.getUint32(jB + 276, !0),
        entCapacity: (BB, jB) => BB.getUint32(jB + 280, !0),
        frameMs: (BB, jB) => BB.getFloat32(jB + 284, !0),
        fps: (BB, jB) => BB.getFloat32(jB + 288, !0),
        entVisPtr: (BB, jB) => BB.getUint32(jB + 292, !0),
        momentumFrac: (BB, jB) => BB.getFloat32(jB + 296, !0),
        chunkSlotsPtr: (BB, jB) => BB.getUint32(jB + 300, !0),
        chunkSlotsLen: (BB, jB) => BB.getUint32(jB + 304, !0),
        walkThroughPtr: (BB, jB) => BB.getUint32(jB + 308, !0),
        walkThroughLen: (BB, jB) => BB.getUint32(jB + 312, !0),
        audioViewPtr: (BB, jB) => BB.getUint32(jB + 316, !0),
        inventoryViewPtr: (BB, jB) => BB.getUint32(jB + 320, !0),
        eventOverflowGen: (BB, jB) => BB.getUint32(jB + 324, !0),
        eventOverflowMask: (BB, jB) => BB.getUint32(jB + 328, !0),
        promptEntity: (BB, jB) => BB.getInt32(jB + 332, !0),
        replayViewPtr: (BB, jB) => BB.getUint32(jB + 336, !0),
        slotIcon: (BB, jB) => BB.getUint32(jB + 340, !0),
        localDeaths: (BB, jB) => BB.getUint32(jB + 344, !0),
        cameraFar: (BB, jB) => BB.getFloat32(jB + 348, !0),
        gliderBoostFuel: (BB, jB) => BB.getUint32(jB + 352, !0),
        interactLabel: (BB, jB) => BB.getUint16(jB + 356, !0),
        interactIcon: (BB, jB) => BB.getUint16(jB + 358, !0)
      },
      ej = {
        BYTES: 16,
        voxelsPtr: (BB, jB) => BB.getUint32(jB + 0, !0),
        version: (BB, jB) => BB.getUint32(jB + 4, !0),
        generation: (BB, jB) => BB.getUint32(jB + 8, !0),
        DN: (BB, jB) => BB.getUint32(jB + 12, !0)
      },
      lj = {
        BYTES: 56,
        listener: (BB, jB, zB) => BB.getFloat64(jB + 0 + 8 * zB, !0),
        forward: (BB, jB, zB) => BB.getFloat32(jB + 24 + 4 * zB, !0),
        up: (BB, jB, zB) => BB.getFloat32(jB + 36 + 4 * zB, !0),
        dropped: (BB, jB) => BB.getUint32(jB + 48, !0),
        unfollowed: (BB, jB) => BB.getUint32(jB + 52, !0)
      },
      wj = {
        BYTES: 8,
        item: (BB, jB) => BB.getUint16(jB + 0, !0),
        amount: (BB, jB) => BB.getUint16(jB + 2, !0),
        attrVersion: (BB, jB) => BB.getUint32(jB + 4, !0)
      },
      xj = {
        BYTES: 76,
        version: (BB, jB) => BB.getUint32(jB + 0, !0),
        state: (BB, jB) => BB.getUint8(jB + 4),
        cameraMode: (BB, jB) => BB.getUint8(jB + 5),
        vp: (BB, jB) => BB.getUint32(jB + 8, !0),
        totalTicks: (BB, jB) => BB.getUint32(jB + 12, !0),
        speed: (BB, jB) => BB.getFloat32(jB + 16, !0),
        markIn: (BB, jB) => BB.getUint32(jB + 20, !0),
        markOut: (BB, jB) => BB.getUint32(jB + 24, !0),
        editVersion: (BB, jB) => BB.getUint32(jB + 28, !0),
        drops: (BB, jB, zB) => BB.getUint32(jB + 32 + 4 * zB, !0)
      },
      Kj = {
        BYTES: 6,
        flags: (BB, jB) => BB.getUint8(jB + 0),
        harvestType: (BB, jB) => BB.getUint8(jB + 1),
        harvestLevel: (BB, jB) => BB.getUint8(jB + 2),
        attachedTop: (BB, jB) => BB.getUint16(jB + 4, !0)
      },
      Cj = {
        BYTES: 3,
        flags: (BB, jB) => BB.getUint8(jB + 0),
        harvests: (BB, jB) => BB.getUint8(jB + 1),
        level: (BB, jB) => BB.getUint8(jB + 2)
      },
      cj = {
        BYTES: 12,
        item: (BB, jB) => BB.getUint32(jB + 0, !0),
        amount: (BB, jB) => BB.getFloat64(jB + 4, !0)
      },
      bj = {
        BYTES: 16,
        recipes: (BB, jB) => BB.getUint32(jB + 0, !0),
        ingredients: (BB, jB) => BB.getUint32(jB + 4, !0),
        craftAllTimes: (BB, jB) => BB.getUint32(jB + 8, !0),
        flags: (BB, jB) => BB.getUint32(jB + 12, !0)
      },
      vj = {
        BYTES: 10,
        item: (BB, jB) => BB.getUint16(jB + 0, !0),
        recipe: (BB, jB) => BB.getUint16(jB + 2, !0),
        produces: (BB, jB) => BB.getUint16(jB + 4, !0),
        requires: (BB, jB) => BB.getUint16(jB + 6, !0),
        flags: (BB, jB) => BB.getUint8(jB + 8)
      },
      Rj = {
        BYTES: 4,
        amount: (BB, jB) => BB.getUint16(jB + 0, !0),
        items: (BB, jB) => BB.getUint16(jB + 2, !0)
      },
      Oj = {
        BYTES: 8,
        amount: (BB, jB) => BB.getUint32(jB + 0, !0),
        item: (BB, jB) => BB.getUint16(jB + 4, !0),
        from: (BB, jB) => BB.getUint16(jB + 6, !0)
      },
      Bz = {
        BYTES: 16,
        serverId: (BB, jB) => BB.getInt32(jB + 0, !0),
        len: (BB, jB) => BB.getUint32(jB + 4, !0),
        kind: (BB, jB) => BB.getUint16(jB + 8, !0),
        variation: (BB, jB) => BB.getUint16(jB + 10, !0),
        pose: (BB, jB) => BB.getUint8(jB + 12),
        meta: (BB, jB) => BB.getUint8(jB + 13),
        mesh: (BB, jB) => BB.getUint8(jB + 14),
        flags: (BB, jB) => BB.getUint8(jB + 15)
      },
      jz = {
        BYTES: 56,
        terrainOpaque: (BB, jB) => BB.getUint32(jB + 0, !0),
        terrainTransparent: (BB, jB) => BB.getUint32(jB + 4, !0),
        terrainPack: (BB, jB) => BB.getUint32(jB + 8, !0),
        earthSky: (BB, jB) => BB.getUint32(jB + 12, !0),
        skyMeshes: (BB, jB) => BB.getUint32(jB + 16, !0),
        regular: (BB, jB) => BB.getUint32(jB + 20, !0),
        thin: (BB, jB) => BB.getUint32(jB + 24, !0),
        line: (BB, jB) => BB.getUint32(jB + 28, !0),
        text: (BB, jB) => BB.getUint32(jB + 32, !0),
        particles: (BB, jB) => BB.getUint32(jB + 36, !0),
        terrainParts: (BB, jB) => BB.getUint32(jB + 40, !0),
        terrainCompiling: (BB, jB) => BB.getUint32(jB + 44, !0),
        ringCopiesMax: (BB, jB) => BB.getUint32(jB + 48, !0),
        ringBusyWrites: (BB, jB) => BB.getUint32(jB + 52, !0)
      },
      zz = {
        BYTES: 16,
        fov: (BB, jB) => BB.getFloat32(jB + 0, !0),
        baseFov: (BB, jB) => BB.getFloat32(jB + 4, !0),
        aspect: (BB, jB) => BB.getFloat32(jB + 8, !0),
        bodyHeading: (BB, jB) => BB.getFloat32(jB + 12, !0)
      },
      Qz = {
        BYTES: 32,
        eye: (BB, jB, zB) => BB.getFloat64(jB + 0 + 8 * zB, !0),
        heading: (BB, jB) => BB.getFloat32(jB + 24, !0),
        pitch: (BB, jB) => BB.getFloat32(jB + 28, !0)
      },
      nz = {
        BYTES: 40,
        feet: (BB, jB, zB) => BB.getFloat64(jB + 0 + 8 * zB, !0),
        eyeHeight: (BB, jB) => BB.getFloat32(jB + 24, !0),
        heading: (BB, jB) => BB.getFloat32(jB + 28, !0),
        headingIsDrawn: (BB, jB) => BB.getUint32(jB + 32, !0)
      },
      dz = 32,
      Iz = 63,
      Nz = {
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

    function uz(BB, jB, zB, QB, nB) {
      var dB, IB, NB, uB, UB, aB, pB, rB, sB, JB, mB, yB, kB, GB, LB, gB, tB, SB, MB, EB, iB, qB, fB, oB, HB;
      switch (BB) {
        case 32:
          return 4 === QB && (null === (dB = nB.tickEnd) || void 0 === dB || dB.call(nB, kj.vp(jB, zB)), !0);
        case 33:
          return 12 === QB && (null === (IB = nB.entitySpawned) || void 0 === IB || IB.call(nB, Gj.serverId(jB, zB), Gj.index(jB, zB), Gj.kind(jB, zB)), !0);
        case 34:
          return 12 === QB && (null === (NB = nB.entityDespawned) || void 0 === NB || NB.call(nB, Gj.serverId(jB, zB), Gj.index(jB, zB), Gj.kind(jB, zB)), !0);
        case 39:
          return !(QB < 20) && (null === (uB = nB.changeBlockFail) || void 0 === uB || uB.call(nB, Lj.pos(jB, zB, 0), Lj.pos(jB, zB, 1), Lj.pos(jB, zB, 2), Lj.actual(jB, zB), Lj.dataLen(jB, zB), zB + 20, QB - 20), !0);
        case 46:
          return 0 === QB && (null === (UB = nB.changeBlockFailEnd) || void 0 === UB || UB.call(nB), !0);
        case 48:
          return 20 === QB && (null === (aB = nB.inventoryEvent) || void 0 === aB || aB.call(nB, gj.what(jB, zB), gj.value(jB, zB), gj.pos(jB, zB, 0), gj.pos(jB, zB, 1), gj.pos(jB, zB, 2), gj.block(jB, zB)), !0);
        case 49:
          return 4 === QB && (null === (pB = nB.heldItemChanged) || void 0 === pB || pB.call(nB, tj.item(jB, zB), tj.slot(jB, zB)), !0);
        case 50:
          return 16 === QB && (null === (rB = nB.shotDamage) || void 0 === rB || rB.call(nB, Sj.target(jB, zB), Sj.damage(jB, zB), Sj.distance(jB, zB), Sj.crit(jB, zB)), !0);
        case 51:
          return !(QB < 4) && (null === (sB = nB.enchantOffer) || void 0 === sB || sB.call(nB, Mj.slot(jB, zB), zB + 4, QB - 4), !0);
        case 52:
          return !(QB < 20) && (null === (JB = nB.uiEvent) || void 0 === JB || JB.call(nB, Ej.what(jB, zB), Ej.value(jB, zB), Ej.pos(jB, zB, 0), Ej.pos(jB, zB, 1), Ej.pos(jB, zB, 2), Ej.block(jB, zB), zB + 20, QB - 20), !0);
        case 53:
          return 12 === QB && (null === (mB = nB.entityInfoChanged) || void 0 === mB || mB.call(nB, ij.serverId(jB, zB), ij.index(jB, zB), ij.what(jB, zB)), !0);
        case 55:
          return 24 === QB && (null === (yB = nB.chunkSlot) || void 0 === yB || yB.call(nB, qj.cx(jB, zB), qj.cy(jB, zB), qj.cz(jB, zB), qj.slot(jB, zB), qj.generation(jB, zB), qj.flags(jB, zB)), !0);
        case 40:
          return 44 === QB && (null === (kB = nB.playSound) || void 0 === kB || kB.call(nB, fj.pos(jB, zB, 0), fj.pos(jB, zB, 1), fj.pos(jB, zB, 2), fj.sound(jB, zB), fj.flags(jB, zB), fj.handle(jB, zB), fj.volume(jB, zB), fj.rate(jB, zB), fj.refDist(jB, zB)), !0);
        case 41:
          return 28 === QB && (null === (GB = nB.soundPos) || void 0 === GB || GB.call(nB, oj.pos(jB, zB, 0), oj.pos(jB, zB, 1), oj.pos(jB, zB, 2), oj.handle(jB, zB)), !0);
        case 42:
          return 16 === QB && (null === (LB = nB.soundSet) || void 0 === LB || LB.call(nB, Hj.handle(jB, zB), Hj.volume(jB, zB), Hj.rate(jB, zB), Hj.refDist(jB, zB)), !0);
        case 43:
          return 12 === QB && (null === (gB = nB.soundFade) || void 0 === gB || gB.call(nB, Dj.handle(jB, zB), Dj.to(jB, zB), Dj.ms(jB, zB), Dj.flags(jB, zB)), !0);
        case 44:
          return 4 === QB && (null === (tB = nB.soundStop) || void 0 === tB || tB.call(nB, Fj.handle(jB, zB)), !0);
        case 45:
          return 0 === QB && (null === (SB = nB.soundReset) || void 0 === SB || SB.call(nB), !0);
        case 56:
          return 8 === QB && (null === (MB = nB.replayFailed) || void 0 === MB || MB.call(nB, Yj.reason(jB, zB), Yj.code(jB, zB), Yj.version(jB, zB)), !0);
        case 57:
          return !(QB < 4) && (null === (EB = nB.replayOption) || void 0 === EB || EB.call(nB, Vj.key(jB, zB), Vj.tag(jB, zB), zB + 4, QB - 4), !0);
        case 58:
          return 16 === QB && (null === (iB = nB.replayFilePart) || void 0 === iB || iB.call(nB, hj.save(jB, zB), hj.index(jB, zB), hj.ptr(jB, zB), hj.len(jB, zB)), !0);
        case 59:
          return 16 === QB && (null === (qB = nB.replayFileReady) || void 0 === qB || qB.call(nB, Xj.save(jB, zB), Xj.kind(jB, zB), Xj.parts(jB, zB), Xj.bytes(jB, zB)), !0);
        case 60:
          return !(QB < 4) && (null === (fB = nB.replayOpened) || void 0 === fB || fB.call(nB, Zj.totalTicks(jB, zB), zB + 4, QB - 4), !0);
        case 61:
          return !(QB < 24) && (null === (oB = nB.replayUiEvent) || void 0 === oB || oB.call(nB, Aj.what(jB, zB), Aj.int(jB, zB), Aj.x(jB, zB), Aj.y(jB, zB), zB + 24, QB - 24), !0);
        case 62:
          return 8 === QB && (null === (HB = nB.recorderEvent) || void 0 === HB || HB.call(nB, Tj.what(jB, zB), Tj.kind(jB, zB), Tj.save(jB, zB)), !0);
        default:
          return !1
      }
    }
    const Uz = {
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
    let az = new Uint8Array(0);

    function pz(BB) {
      return az.buffer !== BB.buffer && (az = new Uint8Array(BB.buffer)), az
    }

    function rz(BB, jB, zB) {
      const QB = BB.Ds(66, jB, 4);
      if (QB < 0) return !1;
      return BB.view.setUint8(QB + 0, zB), !0
    }

    function sz(BB, jB, zB) {
      const QB = BB.Ds(67, jB, 4);
      if (QB < 0) return !1;
      return BB.view.setUint32(QB + 0, zB, !0), !0
    }

    function Jz(BB, jB, zB) {
      const QB = BB.Ds(68, jB, 4);
      if (QB < 0) return !1;
      return BB.view.setUint8(QB + 0, zB), !0
    }

    function mz(BB, jB, zB, QB) {
      const nB = BB.Ds(69, jB, 4 + QB.length);
      if (nB < 0) return !1;
      const dB = BB.view;
      return dB.setUint8(nB + 0, zB), pz(dB).set(QB, dB.byteOffset + nB + 4), !0
    }

    function yz(BB, jB, zB, QB, nB) {
      const dB = BB.Ds(128, jB, 4 + nB.length);
      if (dB < 0) return !1;
      const IB = BB.view;
      return IB.setUint8(dB + 0, zB), IB.setUint16(dB + 2, QB, !0), pz(IB).set(nB, IB.byteOffset + dB + 4), !0
    }

    function kz(BB, jB, zB) {
      const QB = BB.Ds(131, jB, 4);
      if (QB < 0) return !1;
      return BB.view.setInt32(QB + 0, zB, !0), !0
    }

    function Gz(BB, jB, zB) {
      const QB = BB.Ds(132, jB, 4);
      if (QB < 0) return !1;
      return BB.view.setUint32(QB + 0, zB, !0), !0
    }

    function Lz(BB, jB, zB) {
      const QB = BB.Ds(133, jB, 4);
      if (QB < 0) return !1;
      return BB.view.setUint32(QB + 0, zB, !0), !0
    }

    function gz(BB, jB, zB) {
      const QB = BB.Ds(144, jB, 4);
      if (QB < 0) return !1;
      return BB.view.setUint8(QB + 0, zB), !0
    }

    function tz(BB, jB, zB, QB, nB) {
      const dB = BB.Ds(145, jB, 12);
      if (dB < 0) return !1;
      const IB = BB.view;
      return IB.setInt32(dB + 0, zB, !0), IB.setInt32(dB + 4, QB, !0), IB.setInt32(dB + 8, nB, !0), !0
    }

    function Sz(BB, jB, zB, QB) {
      const nB = BB.Ds(256, jB, 4 + QB.length);
      if (nB < 0) return !1;
      const dB = BB.view;
      return dB.setUint16(nB + 0, zB, !0), pz(dB).set(QB, dB.byteOffset + nB + 4), !0
    }

    function Mz(BB, jB, zB) {
      const QB = BB.Ds(258, jB, 4);
      if (QB < 0) return !1;
      return BB.view.setUint8(QB + 0, zB), !0
    }

    function Ez(BB, jB, zB, QB, nB, dB, IB, NB, uB) {
      const UB = BB.Ds(320, jB, 48 + uB.length);
      if (UB < 0) return !1;
      const aB = BB.view;
      aB.setUint32(UB + 0, zB, !0), aB.setUint16(UB + 4, QB, !0), aB.setUint16(UB + 6, nB, !0), aB.setUint32(UB + 8, dB, !0);
      for (let pB = 0; pB < 3; pB++) aB.setFloat64(UB + 12 + 8 * pB, IB[pB], !0);
      for (let pB = 0; pB < 3; pB++) aB.setFloat32(UB + 36 + 4 * pB, NB[pB], !0);
      return pz(aB).set(uB, aB.byteOffset + UB + 48), !0
    }

    function iz(BB, jB, zB, QB, nB, dB, IB, NB, uB) {
      const UB = BB.Ds(321, jB, 48 + uB.length);
      if (UB < 0) return !1;
      const aB = BB.view;
      aB.setUint32(UB + 0, zB, !0), aB.setInt32(UB + 4, QB, !0), aB.setUint16(UB + 8, nB, !0), aB.setUint16(UB + 10, dB, !0);
      for (let pB = 0; pB < 3; pB++) aB.setFloat64(UB + 12 + 8 * pB, IB[pB], !0);
      for (let pB = 0; pB < 3; pB++) aB.setFloat32(UB + 36 + 4 * pB, NB[pB], !0);
      return pz(aB).set(uB, aB.byteOffset + UB + 48), !0
    }

    function qz(BB, jB, zB, QB, nB, dB, IB) {
      const NB = BB.Ds(322, jB, 44 + IB.length);
      if (NB < 0) return !1;
      const uB = BB.view;
      uB.setUint32(NB + 0, zB, !0), uB.setUint32(NB + 4, QB, !0);
      for (let UB = 0; UB < 3; UB++) uB.setFloat64(NB + 8 + 8 * UB, nB[UB], !0);
      for (let UB = 0; UB < 3; UB++) uB.setFloat32(NB + 32 + 4 * UB, dB[UB], !0);
      return pz(uB).set(IB, uB.byteOffset + NB + 44), !0
    }

    function fz(BB, jB, zB) {
      const QB = BB.Ds(323, jB, 4);
      if (QB < 0) return !1;
      return BB.view.setUint32(QB + 0, zB, !0), !0
    }

    function oz(BB, jB, zB, QB, nB, dB) {
      const IB = BB.Ds(324, jB, 32 + dB.length);
      if (IB < 0) return !1;
      const NB = BB.view;
      NB.setUint32(IB + 0, zB, !0), NB.setUint32(IB + 4, QB, !0);
      for (let uB = 0; uB < 3; uB++) NB.setFloat64(IB + 8 + 8 * uB, nB[uB], !0);
      return pz(NB).set(dB, NB.byteOffset + IB + 32), !0
    }

    function Hz(BB, jB) {
      return !(BB.Ds(325, jB, 0) < 0)
    }

    function Dz(BB, jB, zB, QB, nB, dB) {
      const IB = BB.Ds(384, jB, 16);
      if (IB < 0) return !1;
      const NB = BB.view;
      return NB.setUint32(IB + 0, zB, !0), NB.setUint32(IB + 4, QB, !0), NB.setFloat32(IB + 8, nB, !0), NB.setFloat32(IB + 12, dB, !0), !0
    }

    function Fz(BB, jB, zB, QB, nB, dB, IB) {
      const NB = BB.Ds(385, jB, 36 + IB.length);
      if (NB < 0) return !1;
      const uB = BB.view;
      uB.setUint32(NB + 0, zB, !0), uB.setUint32(NB + 4, QB, !0);
      for (let UB = 0; UB < 3; UB++) uB.setFloat64(NB + 8 + 8 * UB, nB[UB], !0);
      return uB.setUint32(NB + 32, dB, !0), pz(uB).set(IB, uB.byteOffset + NB + 36), !0
    }

    function Yz(BB, jB, zB, QB, nB, dB, IB, NB, uB) {
      const UB = BB.Ds(386, jB, 56 + uB.length);
      if (UB < 0) return !1;
      const aB = BB.view;
      aB.setUint32(UB + 0, zB, !0), aB.setUint8(UB + 4, QB);
      for (let pB = 0; pB < 4; pB++) aB.setFloat32(UB + 8 + 4 * pB, nB[pB], !0);
      for (let pB = 0; pB < 3; pB++) aB.setFloat64(UB + 24 + 8 * pB, dB[pB], !0);
      return aB.setUint32(UB + 48, IB, !0), aB.setUint32(UB + 52, NB, !0), pz(aB).set(uB, aB.byteOffset + UB + 56), !0
    }

    function Vz(BB, jB, zB, QB, nB, dB, IB, NB, uB) {
      const UB = BB.Ds(387, jB, 56);
      if (UB < 0) return !1;
      const aB = BB.view;
      aB.setUint32(UB + 0, zB, !0), aB.setUint16(UB + 4, QB, !0), aB.setUint8(UB + 6, nB);
      for (let pB = 0; pB < 3; pB++) aB.setFloat64(UB + 8 + 8 * pB, dB[pB], !0);
      for (let pB = 0; pB < 2; pB++) aB.setFloat32(UB + 32 + 4 * pB, IB[pB], !0);
      aB.setFloat32(UB + 40, NB, !0);
      for (let pB = 0; pB < 3; pB++) aB.setFloat32(UB + 44 + 4 * pB, uB[pB], !0);
      return !0
    }

    function hz(BB, jB, zB) {
      const QB = BB.Ds(388, jB, 4);
      if (QB < 0) return !1;
      return BB.view.setUint32(QB + 0, zB, !0), !0
    }

    function Xz(BB, jB, zB, QB) {
      const nB = BB.Ds(389, jB, 8);
      if (nB < 0) return !1;
      const dB = BB.view;
      return dB.setInt32(nB + 0, zB, !0), dB.setFloat32(nB + 4, QB, !0), !0
    }

    function Zz(BB, jB, zB, QB) {
      const nB = BB.Ds(390, jB, 8);
      if (nB < 0) return !1;
      const dB = BB.view;
      return dB.setInt32(nB + 0, zB, !0), dB.setFloat32(nB + 4, QB, !0), !0
    }

    function Az(BB, jB, zB, QB, nB, dB) {
      const IB = BB.Ds(391, jB, 12);
      if (IB < 0) return !1;
      const NB = BB.view;
      return NB.setFloat32(IB + 0, zB, !0), NB.setFloat32(IB + 4, QB, !0), NB.setUint8(IB + 8, nB), NB.setUint8(IB + 9, dB), !0
    }

    function Tz(BB, jB, zB) {
      const QB = BB.Ds(392, jB, 4);
      if (QB < 0) return !1;
      return BB.view.setUint32(QB + 0, zB, !0), !0
    }

    function Pz(BB, jB, zB, QB, nB) {
      const dB = BB.Ds(393, jB, 12);
      if (dB < 0) return !1;
      const IB = BB.view;
      return IB.setUint32(dB + 0, zB, !0), IB.setUint16(dB + 4, QB, !0), IB.setFloat32(dB + 8, nB, !0), !0
    }

    function Wz(BB, jB, zB, QB, nB, dB, IB) {
      const NB = BB.Ds(394, jB, 36);
      if (NB < 0) return !1;
      const uB = BB.view;
      uB.setUint32(NB + 0, zB, !0), uB.setUint16(NB + 4, QB, !0), uB.setUint8(NB + 6, nB);
      for (let UB = 0; UB < 3; UB++) uB.setFloat64(NB + 8 + 8 * UB, dB[UB], !0);
      return uB.setFloat32(NB + 32, IB, !0), !0
    }

    function ez(BB, jB, zB) {
      const QB = BB.Ds(398, jB, 4);
      if (QB < 0) return !1;
      return BB.view.setUint32(QB + 0, zB, !0), !0
    }

    function lz(BB, jB, zB) {
      const QB = BB.Ds(448, jB, 4);
      if (QB < 0) return !1;
      return BB.view.setFloat32(QB + 0, zB, !0), !0
    }

    function wz(BB, jB, zB, QB) {
      const nB = BB.Ds(450, jB, 12);
      if (nB < 0) return !1;
      const dB = BB.view;
      for (let IB = 0; IB < 2; IB++) dB.setFloat32(nB + 0 + 4 * IB, zB[IB], !0);
      return dB.setUint8(nB + 8, QB), !0
    }

    function xz(BB, jB, zB, QB) {
      const nB = BB.Ds(452, jB, 8);
      if (nB < 0) return !1;
      const dB = BB.view;
      return dB.setFloat32(nB + 0, zB, !0), dB.setUint8(nB + 4, QB), !0
    }

    function Kz(BB, jB, zB, QB, nB) {
      const dB = BB.Ds(454, jB, 4);
      if (dB < 0) return !1;
      const IB = BB.view;
      return IB.setUint8(dB + 0, zB), IB.setUint8(dB + 1, QB), IB.setUint8(dB + 2, nB), !0
    }

    function Cz(BB, jB, zB, QB) {
      const nB = BB.Ds(455, jB, 40);
      if (nB < 0) return !1;
      const dB = BB.view;
      for (let IB = 0; IB < 9; IB++) dB.setInt32(nB + 0 + 4 * IB, zB[IB], !0);
      return dB.setUint32(nB + 36, QB, !0), !0
    }

    function cz(BB, jB, zB, QB) {
      const nB = BB.Ds(456, jB, 8);
      if (nB < 0) return !1;
      const dB = BB.view;
      return dB.setFloat32(nB + 0, zB, !0), dB.setUint8(nB + 4, QB), !0
    }

    function bz(BB, jB, zB, QB, nB) {
      const dB = BB.Ds(457, jB, 16);
      if (dB < 0) return !1;
      const IB = BB.view;
      for (let NB = 0; NB < 3; NB++) IB.setInt32(dB + 0 + 4 * NB, zB[NB], !0);
      for (let NB = 0; NB < 3; NB++) IB.setInt8(dB + 12 + 1 * NB, QB[NB]);
      return IB.setUint8(dB + 15, nB), !0
    }

    function vz(BB, jB, zB, QB) {
      const nB = BB.Ds(530, jB, 4 + QB.length);
      if (nB < 0) return !1;
      const dB = BB.view;
      return dB.setUint8(nB + 0, zB), pz(dB).set(QB, dB.byteOffset + nB + 4), !0
    }

    function Rz(BB, jB, zB, QB, nB, dB) {
      const IB = BB.Ds(531, jB, 12 + dB.length);
      if (IB < 0) return !1;
      const NB = BB.view;
      return NB.setFloat32(IB + 0, zB, !0), NB.setFloat32(IB + 4, QB, !0), NB.setUint32(IB + 8, nB, !0), pz(NB).set(dB, NB.byteOffset + IB + 12), !0
    }

    function Oz(BB, jB, zB, QB, nB, dB) {
      const IB = BB.Ds(532, jB, 12 + dB.length);
      if (IB < 0) return !1;
      const NB = BB.view;
      return NB.setInt32(IB + 0, zB, !0), NB.setInt32(IB + 4, QB, !0), NB.setUint32(IB + 8, nB, !0), pz(NB).set(dB, NB.byteOffset + IB + 12), !0
    }

    function BQ(BB, jB, zB, QB, nB) {
      const dB = BB.Ds(533, jB, 8 + nB.length);
      if (dB < 0) return !1;
      const IB = BB.view;
      return IB.setInt32(dB + 0, zB, !0), IB.setInt32(dB + 4, QB, !0), pz(IB).set(nB, IB.byteOffset + dB + 8), !0
    }

    function jQ(BB, jB) {
      return !(BB.Ds(576, jB, 0) < 0)
    }

    function zQ(BB, jB, zB, QB, nB, dB) {
      const IB = BB.Ds(577, jB, 36 + dB.length);
      if (IB < 0) return !1;
      const NB = BB.view;
      NB.setUint8(IB + 0, zB);
      for (let uB = 0; uB < 16; uB++) NB.setUint8(IB + 4 + 1 * uB, QB[uB]);
      for (let uB = 0; uB < 16; uB++) NB.setUint8(IB + 20 + 1 * uB, nB[uB]);
      return pz(NB).set(dB, NB.byteOffset + IB + 36), !0
    }

    function QQ(BB, jB, zB, QB) {
      const nB = BB.Ds(578, jB, 4 + QB.length);
      if (nB < 0) return !1;
      const dB = BB.view;
      return dB.setUint8(nB + 0, zB), pz(dB).set(QB, dB.byteOffset + nB + 4), !0
    }

    function nQ(BB, jB, zB, QB, nB, dB, IB, NB) {
      const uB = BB.Ds(579, jB, 36);
      if (uB < 0) return !1;
      const UB = BB.view;
      return UB.setFloat64(uB + 0, zB, !0), UB.setFloat64(uB + 8, QB, !0), UB.setFloat64(uB + 16, nB, !0), UB.setFloat64(uB + 24, dB, !0), UB.setUint16(uB + 32, IB, !0), UB.setUint8(uB + 34, NB), !0
    }
    class dQ {
      constructor(BB, jB) {
        this.core = BB, this.afterCall = jB
      }
      canModify(BB, jB, zB) {
        const QB = this.core.mdB(BB, jB, zB);
        return this.afterCall(), QB
      }
      terrainBlocked(BB, jB, zB, QB, nB) {
        const dB = this.core.NIB(BB, jB, zB, QB, nB);
        return this.afterCall(), dB
      }
      eD(BB, jB, zB, QB) {
        const nB = this.core.Ns(BB, jB, zB, QB);
        return this.afterCall(), nB
      }
      blockData(BB, jB, zB) {
        const QB = this.core.sdB(BB, jB, zB);
        return this.afterCall(), QB
      }
      cameraSweep(BB, jB, zB, QB, nB, dB, IB) {
        const NB = this.core.rnB(BB, jB, zB, QB, nB, dB, IB);
        return this.afterCall(), NB
      }
      hasServerTarget(BB) {
        const jB = this.core.odB(BB);
        return this.afterCall(), jB
      }
      entityInteractable(BB) {
        const jB = this.core.SdB(BB);
        return this.afterCall(), jB
      }
      entityCrouching(BB) {
        const jB = this.core.tdB(BB);
        return this.afterCall(), jB
      }
      predictServerPosition(BB, jB, zB, QB) {
        const nB = this.core.PdB(BB, jB, zB, QB);
        return this.afterCall(), nB
      }
      setOtherEntitySetting(BB, jB, zB) {
        const QB = this.core.knB(BB, jB, zB);
        return this.afterCall(), QB
      }
      entityInfoBatch(BB) {
        const jB = this.core.gnB(BB);
        return this.afterCall(), jB
      }
      entityName(BB) {
        const jB = this.core.MdB(BB);
        return this.afterCall(), jB
      }
      hasEffect(BB, jB) {
        const zB = this.core.fdB(BB, jB);
        return this.afterCall(), zB
      }
      scratchPtr() {
        const BB = this.core.UnB();
        return this.afterCall(), BB
      }
      invSwap(BB, jB) {
        const zB = this.core.hdB(BB, jB);
        return this.afterCall(), zB
      }
      invMove(BB, jB, zB) {
        const QB = this.core.FdB(BB, jB, zB);
        return this.afterCall(), QB
      }
      invQuickMove(BB, jB, zB, QB) {
        const nB = this.core.YdB(BB, jB, zB, QB);
        return this.afterCall(), nB
      }
      invRemove(BB, jB, zB) {
        const QB = this.core.VdB(BB, jB, zB);
        return this.afterCall(), QB
      }
      invEnchant(BB, jB, zB, QB, nB) {
        const dB = this.core.DdB(BB, jB, zB, QB, nB);
        return this.afterCall(), dB
      }
      craft(BB, jB, zB) {
        const QB = this.core.craft(BB, jB, zB);
        return this.afterCall(), QB
      }
      salvage(BB, jB, zB) {
        const QB = this.core.salvage(BB, jB, zB);
        return this.afterCall(), QB
      }
      selectSlot(BB) {
        const jB = this.core.wdB(BB);
        return this.afterCall(), jB
      }
      closeChest() {
        const BB = this.core.ydB();
        return this.afterCall(), BB
      }
      itemAttributesBatch(BB) {
        const jB = this.core.LnB(BB);
        return this.afterCall(), jB
      }
      itemNames() {
        const BB = this.core.uH();
        return this.afterCall(), BB
      }
      blockProps() {
        const BB = this.core.JdB();
        return this.afterCall(), BB
      }
      itemProps() {
        const BB = this.core.XdB();
        return this.afterCall(), BB
      }
      salvageRecipe(BB) {
        const jB = this.core.SnB(BB);
        return this.afterCall(), jB
      }
      craftingView(BB, jB, zB) {
        const QB = this.core.GnB(BB, jB, zB);
        return this.afterCall(), QB
      }
      directorView() {
        const BB = this.core.pnB();
        return this.afterCall(), BB
      }
      directorDefaultPose() {
        const BB = this.core.snB();
        return this.afterCall(), BB
      }
      directorEntity(BB) {
        const jB = this.core.JnB(BB);
        return this.afterCall(), jB
      }
      directorPose(BB, jB, zB, QB, nB, dB) {
        const IB = this.core.mnB(BB, jB, zB, QB, nB, dB);
        return this.afterCall(), IB
      }
      passTimings(BB) {
        const jB = this.core.TdB(BB);
        return this.afterCall(), jB
      }
      drawCensus() {
        const BB = this.core.gdB();
        return this.afterCall(), BB
      }
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);